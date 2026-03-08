import { readFile } from 'fs/promises'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'source', 'TrichDan.txt')
    const content = await readFile(filePath, 'utf-8')
    
    // Parse the references and convert to JSON
    const lines = content.trim().split('\n').filter(line => line.trim())
    const references = lines.map(line => {
      const match = line.match(/^\d+\.(.+)$/)
      return match ? match[1].trim() : line.trim()
    })
    
    return NextResponse.json({ references })
  } catch (error) {
    console.error('Error reading references:', error)
    return NextResponse.json(
      { error: 'Failed to load references' },
      { status: 500 }
    )
  }
}
