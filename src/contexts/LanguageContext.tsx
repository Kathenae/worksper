"use client"
import { defaultDict, defaultLocale, LanguageDictionary, Locale } from "@/dictionary";
import { createContext } from "react";

export const LanguageContext = createContext<{ lang: Locale, dict: LanguageDictionary }>({
    lang: defaultLocale,
    dict: defaultDict
})

export const LanguageProvider: React.FC<{ children: React.ReactNode, lang: Locale, dict: LanguageDictionary }> = ({ children, lang, dict }) => {
    return (
        <LanguageContext.Provider value={{ lang, dict }}>
            {children}
        </LanguageContext.Provider>
    )
}