import { defineEventHandler, createError } from 'h3'
import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

const getText = (block: any) => {
  return (block[block.type]?.rich_text ?? [])
    .map((item: any) => item.plain_text)
    .join('')
}

const mapBlock = (block: any) => {
  const text = getText(block)

  switch (block.type) {
    case 'paragraph':
      return { id: block.id, tag: 'p', text }
    case 'heading_1':
      return { id: block.id, tag: 'h1', text }
    case 'heading_2':
      return { id: block.id, tag: 'h2', text }
    case 'heading_3':
      return { id: block.id, tag: 'h3', text }
    case 'bulleted_list_item':
      return { id: block.id, tag: 'li', listType: 'bulleted', text }
    case 'numbered_list_item':
      return { id: block.id, tag: 'li', listType: 'numbered', text }
    case 'quote':
      return { id: block.id, tag: 'blockquote', text }
    default:
      return { id: block.id, tag: 'p', text }
  }
}

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id as string | undefined

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Missing post id' })
  }

  if (!process.env.NOTION_API_KEY) {
    throw createError({ statusCode: 500, statusMessage: 'Missing NOTION_API_KEY' })
  }

  try {
    const page = await notion.pages.retrieve({ page_id: id })
    const blocks = await notion.blocks.children.list({ block_id: id, page_size: 100 })
    const pageData = page as any

    const title = pageData.properties?.Title?.title?.[0]?.plain_text || 'Sem título'
    const date = pageData.properties?.Date?.date?.start || ''
    const summary = pageData.properties?.Summary?.rich_text?.[0]?.plain_text || ''

    return {
      id,
      title,
      date,
      summary,
      content: blocks.results.map((block: any) => mapBlock(block)),
    }
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Erro ao buscar post do Notion', data: error })
  }
})
