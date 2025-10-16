import { DictionaryWord } from '@/dictionary';
import z from 'zod';

export function ContactSchema(t?: (text: DictionaryWord) => string) {
    const tr = (text: DictionaryWord, defaults?: string) => {
        if (t) {
            return t(text)
        }
        if (defaults) {
            return defaults
        }
        return text
    }
    return z.object({
        name: z.string().trim().min(1, { message: tr('contact.name-required') }).max(100),
        email: z.string().trim().email({ message: tr('contact.invalid-email') }).max(255),
        message: z.string().trim().min(1, { message: tr('contact.message-required') }).max(1000),
    });
}