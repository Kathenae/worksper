"use client"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"

const Customers = () => {
    const { t } = useLanguage()

    const customers = [
        {
            name: "Sonhar Imobiliario",
            logo: "/images/sonhar-light.png",
            logoDark: "/images/sonhar-dark.png",
        },
        {
            name: "IFeature",
            logo: "/images/ifeature.svg",
        },
        {
            name: "Candelight",
            logo: "/images/candelight.png"
        }
    ]

    return (
        <section id="customers" className="min-h-screen flex items-center justify-center px-6 py-20 bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">{t("customersTitle")}</h2>
                    <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">{t("customersSubtitle")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
                    {customers.map((customer, index) => (
                        <div
                            key={customer.name}
                            className="flex items-center justify-center p-8 md:p-12 bg-background border border-border rounded hover:border-accent transition-smooth group hover:shadow-lg"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            <div className="relative w-full h-16 md:h-20 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-smooth">
                                <Image
                                    src={customer.logo || "/placeholder.svg"}
                                    alt={`${customer.name} logo`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Customers
