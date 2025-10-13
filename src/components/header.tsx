"use client"
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Header = () => {
    const { language, setLanguage, t } = useLanguage();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-2xl font-light tracking-tight hover:opacity-70 transition-smooth"
                    >
                        Worksper
                    </button>

                    <div className="flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection('services')}
                            className="text-sm font-light text-muted-foreground hover:text-foreground transition-smooth"
                        >
                            {t('services')}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-sm font-light text-muted-foreground hover:text-foreground transition-smooth"
                        >
                            {t('about')}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-sm font-light text-muted-foreground hover:text-foreground transition-smooth"
                        >
                            {t('contact')}
                        </button>

                        <div className="flex items-center gap-2 ml-4 border-l border-border pl-4">
                            <Button
                                variant={language === 'en' ? 'default' : 'ghost'}
                                size="sm"
                                onClick={() => setLanguage('en')}
                                className="text-xs font-light h-7 px-3"
                            >
                                EN
                            </Button>
                            <Button
                                variant={language === 'pt' ? 'default' : 'ghost'}
                                size="sm"
                                onClick={() => setLanguage('pt')}
                                className="text-xs font-light h-7 px-3"
                            >
                                PT
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;