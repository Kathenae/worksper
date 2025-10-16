import { LanguageContext } from "@/contexts/LanguageContext";
import { useContext } from "react";

export function useLanguage() {
    const { dict, lang } = useContext(LanguageContext)

    const t = (word: keyof typeof dict, def?: string) => {
        if (Object.keys(dict).includes(word)) {
            return dict[word]
        } else if (def) {
            return def
        } else {
            return word
        }
    }

    return {
        lang,
        t
    }
}