"use client"
import { useLanguage } from '@/hooks/use-language';

const Customers = () => {
    const { t } = useLanguage();

    const customers = [
        'Sonhar Imobiliaria',
        "IFeature"
    ];

    return (
        <section id="customers" className="min-h-screen flex items-center justify-center px-6 py-20 bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                        {t('customersTitle')}
                    </h2>
                    <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                        {t('customersSubtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    {customers.map((customer, index) => (
                        <div
                            key={customer}
                            className="flex items-center justify-center p-8 bg-background border border-border rounded hover:border-accent transition-smooth group"
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <span className="text-xl md:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-smooth">
                                {customer}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Customers;