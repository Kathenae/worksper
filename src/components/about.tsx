"use client"
import { useLanguage } from "@/hooks/use-language";

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-secondary">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 text-center">
                    {t('aboutTitle')}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed text-center">
                    {t('aboutText')}
                </p>
            </div>
        </section>
    );
};

export default About;