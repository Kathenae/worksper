import z, { ZodError } from 'zod'
import fs from 'fs'
import path from "path"
import { NextRequest } from 'next/server'
import { ContactSchema } from '@/components/contact-schema'

export async function POST(
    req: NextRequest,
) {
    try {
        const schema = ContactSchema()
        const body = await req.json()
        const contact = schema.parse(body)
        // Define file path (inside project directory)
        const filePath = path.join(process.cwd(), 'data', 'contacts.json')

        // Ensure the directory exists
        fs.mkdirSync(path.dirname(filePath), { recursive: true })

        // Read existing data if file exists
        let existing: unknown[] = []
        if (fs.existsSync(filePath)) {
            const fileContents = fs.readFileSync(filePath, 'utf8')
            existing = fileContents ? JSON.parse(fileContents) : []
        }

        // Add the new contact
        existing.push({
            ...contact,
            createdAt: new Date().toISOString(),
        })

        // Write back to file
        fs.writeFileSync(filePath, JSON.stringify(existing, null, 2))
        return new Response(JSON.stringify({ success: true }))
    } catch (err) {
        if (err instanceof ZodError) {
            return new Response(JSON.stringify({ success: false, errors: z.flattenError(err) }), {
                status: 400
            })
        } else {
            console.error(err)
        }
    }

}