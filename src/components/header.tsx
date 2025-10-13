"use client"
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { Locale } from '@/dictionary';

const Header = () => {
    const { t, lang } = useLanguage();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const pathname = usePathname();
    const redirectedPathname = (locale: Locale) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = locale;
        return segments.join("/");
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
                                variant={lang === 'en' ? 'default' : 'ghost'}
                                size="sm"
                                className="text-xs font-light h-7 px-3"
                                asChild
                            >
                                <Link href={redirectedPathname('en')}>
                                    EN
                                </Link>
                            </Button>
                            <Button
                                variant={lang === 'pt' ? 'default' : 'ghost'}
                                size="sm"
                                className="text-xs font-light h-7 px-3"
                                asChild
                            >
                                <Link href={redirectedPathname('pt')}>
                                    PT
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;