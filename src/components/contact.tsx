"use client"
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';



const Contact = () => {
    const { t } = useLanguage();

    type ContactFormValues = z.infer<typeof contactSchema>;

    const contactSchema = z.object({
        name: z.string().trim().min(1, { message: t('contact.name-required') }).max(100),
        email: z.string().trim().email({ message: t('contact.invalid-email') }).max(255),
        message: z.string().trim().min(1, { message: t('contact.message-required') }).max(1000),
    });


    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const onSubmit = (data: ContactFormValues) => {
        const subject = encodeURIComponent(`Contact from ${data.name}`);
        const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
        // window.location.href = `mailto:hello@worksper.com?subject=${subject}&body=${body}`;

        toast(t('contactSuccess'));

        form.reset();
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="container mx-auto max-w-2xl">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="relative">
                            <div className="w-3 h-3 bg-accent rounded-full"></div>
                            <div className="absolute inset-0 w-3 h-3 bg-accent rounded-full animate-ping opacity-75"></div>
                        </div>
                        <span className="text-sm font-light text-muted-foreground">
                            Online now • Ready to help
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                        {t('contactTitle')}
                    </h2>
                    <p className="text-lg text-muted-foreground font-light">
                        {t('contactText')}
                    </p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-light">{t('contactName')}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={t('contactName')}
                                            className="font-light"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-light">{t('contactEmail')}</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder={t('contactEmail')}
                                            className="font-light"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-light">{t('contactMessage')}</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder={t('contactMessage')}
                                            className="min-h-[150px] font-light resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full font-light"
                            size="lg"
                        >
                            {t('contactSubmit')}
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default Contact;