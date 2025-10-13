"use client"

import { useLanguage } from "@/hooks/use-language";

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="container mx-auto max-w-4xl text-center">
                <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 leading-tight">
                    {t('heroTitle')}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                    {t('heroSubtitle')}
                </p>
            </div>
        </section>
    );
};

export default Hero;