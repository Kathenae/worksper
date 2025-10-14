"use client"
import { useLanguage } from '@/hooks/use-language';
import { Code2, Palette, TrendingUp } from 'lucide-react';

const Services = () => {
    const { t } = useLanguage();

    const services = [
        {
            icon: Palette,
            title: t('service1Title'),
            description: t('service1Desc'),
        },
        {
            icon: Code2,
            title: t('service2Title'),
            description: t('service2Desc'),
        },
        {
            icon: TrendingUp,
            title: t('service3Title'),
            description: t('service3Desc'),
        },
    ];

    return (
        <section id="services" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-20 text-center">
                    {t('servicesTitle')}
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group lg:text-center"
                        >
                            <div className="mb-6 inline-block p-3 rounded-sm bg-secondary group-hover:bg-accent transition-smooth">
                                <service.icon className="w-6 h-6 text-foreground group-hover:text-accent-foreground transition-smooth" />
                            </div>
                            <h3 className="text-xl font-light mb-4 lg:text-center">{service.title}</h3>
                            <p className="text-muted-foreground font-light leading-relaxed lg:text-center">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;