"use client"

import { useLanguage } from "@/hooks/use-language";

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-border py-12 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-2xl font-light tracking-tight">Worksper</div>
                    <p className="text-sm text-muted-foreground font-light text-center md:text-left max-w-md">
                        {t('footerText')}
                    </p>
                    <p className="text-sm text-muted-foreground font-light">
                        © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;