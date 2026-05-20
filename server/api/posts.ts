export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  
  // Resgata as chaves do seu arquivo .env / runtimeConfig
  const apiKey = config.notionApiKey || process.env.NOTION_API_KEY
  const databaseId = config.notionDatabaseId || process.env.NOTION_DATABASE_ID

  if (!apiKey || !databaseId) {
    return { 
      error: 'Configuração ausente', 
      details: 'Garanta que NOTION_API_KEY e NOTION_DATABASE_ID estão no seu .env' 
    }
  }

  try {
    // Faz a requisição HTTP bruta para a API oficial do Notion
    const response = await $fetch<any>(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Notion-Version': '2022-06-28', // Versão estável da API exigida pelo Notion
        'Content-Type': 'application/json'
      },
      body: {
        filter: {
          property: 'Status',
          status: {
            equals: 'Done'
          }
        },
        sorts: [
          {
            property: 'Date',
            direction: 'descending'
          }
        ]
      }
    })

    // Mapeia o JSON retornado para o formato limpo do seu front-end
    return response.results.map((page: any) => {
      const props = page.properties

      const titleObj = props.Title?.title || props.Name?.title || []
      const title = titleObj[0]?.plain_text || 'Sem título'

      return {
        id: page.id,
        title: title,
        date: props.Date?.date?.start || 'Sem data',
        summary: props.Summary?.rich_text[0]?.plain_text || 'Sem resumo'
      }
    })

  } catch (error: any) {
    // Captura os detalhes do erro HTTP caso o Notion rejeite a requisição
    const errorDetails = error.data?.message || error.message || String(error)
    return { 
      error: 'Erro ao conectar com o Notion API', 
      details: errorDetails 
    }
  }
})