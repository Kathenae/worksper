import { LanguageContext } from "@/contexts/LanguageContext";
import { useContext } from "react";

export function useLanguage() {
    const { dict, lang } = useContext(LanguageContext)

    const t = (word: keyof typeof dict) => {
        return dict[word]
    }

    return {
        lang,
        t
    }
}