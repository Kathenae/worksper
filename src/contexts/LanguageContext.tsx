"use client"
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        // Navigation
        services: 'Services',
        about: 'About',
        contact: 'Contact',

        // Hero
        heroTitle: 'Crafting Digital Experiences',
        heroSubtitle: 'We design and develop elegant web solutions that combine minimalist aesthetics with powerful functionality.',

        // Services
        servicesTitle: 'What We Do',
        service1Title: 'Web Design',
        service1Desc: 'Clean, user-centered interfaces that communicate your brand with clarity and purpose.',
        service2Title: 'Development',
        service2Desc: 'Modern, scalable web applications built with precision and attention to detail.',
        service3Title: 'Strategy',
        service3Desc: 'Digital solutions aligned with your business goals and user needs.',

        // Customers
        customersTitle: 'Trusted By',
        customersSubtitle: 'We partner with forward-thinking companies to create digital experiences that matter.',

        // About
        aboutTitle: 'Our Philosophy',
        aboutText: 'At Worksper, we believe that great design is invisible. We focus on creating digital experiences that feel natural and intuitive, where every element serves a purpose. Our approach combines strategic thinking with meticulous execution to deliver solutions that stand the test of time.',

        // Contact
        contactTitle: 'Let\'s Work Together',
        contactText: 'Have a project in mind? We\'d love to hear from you.',
        contactName: 'Name',
        contactEmail: 'Email',
        contactMessage: 'Message',
        contactSubmit: 'Send Message',
        contactSuccess: 'Message sent successfully!',
        contactError: 'Failed to send message. Please try again.',

        // Footer
        footerText: 'A web development agency focused on minimalist design and quality craftsmanship.',
    },
    pt: {
        // Navigation
        services: 'Serviços',
        about: 'Sobre',
        contact: 'Contato',

        // Hero
        heroTitle: 'Criando Experiências Digitais',
        heroSubtitle: 'Projetamos e desenvolvemos soluções web elegantes que combinam estética minimalista com funcionalidade poderosa.',

        // Services
        servicesTitle: 'O Que Fazemos',
        service1Title: 'Web Design',
        service1Desc: 'Interfaces limpas e centradas no usuário que comunicam sua marca com clareza e propósito.',
        service2Title: 'Desenvolvimento',
        service2Desc: 'Aplicações web modernas e escaláveis construídas com precisão e atenção aos detalhes.',
        service3Title: 'Estratégia',
        service3Desc: 'Soluções digitais alinhadas com seus objetivos de negócio e necessidades dos usuários.',

        // Customers
        customersTitle: 'Confiança De',
        customersSubtitle: 'Trabalhamos com empresas visionárias para criar experiências digitais que importam.',

        // About
        aboutTitle: 'Nossa Filosofia',
        aboutText: 'Na Worksper, acreditamos que um ótimo design é invisível. Focamos em criar experiências digitais que parecem naturais e intuitivas, onde cada elemento tem um propósito. Nossa abordagem combina pensamento estratégico com execução meticulosa para entregar soluções que resistem ao teste do tempo.',

        // Contact
        contactTitle: 'Vamos Trabalhar Juntos',
        contactText: 'Tem um projeto em mente? Adoraríamos ouvir de você.',
        contactName: 'Nome',
        contactEmail: 'Email',
        contactMessage: 'Mensagem',
        contactSubmit: 'Enviar Mensagem',
        contactSuccess: 'Mensagem enviada com sucesso!',
        contactError: 'Falha ao enviar mensagem. Por favor, tente novamente.',

        // Footer
        footerText: 'Uma agência de desenvolvimento web focada em design minimalista e artesanato de qualidade.',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const getDefaultLanguage = (): Language => {
        const userLocale = navigator.language.toLowerCase();
        return userLocale.startsWith('pt') ? 'pt' : 'en';
    };

    const [language, setLanguage] = useState<Language>(getDefaultLanguage());

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations.en] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};