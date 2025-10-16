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
import { ContactSchema } from './contact-schema';

const Contact = () => {
    const { t } = useLanguage();

    type ContactFormValues = z.infer<typeof contactSchema>;

    const contactSchema = ContactSchema(t)


    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const onSubmit = async (data: ContactFormValues) => {

        const response = await fetch("/api/contact", {
            method: 'POST',
            body: JSON.stringify(data)
        })

        if (response.status == 200) {
            toast(t('contactSuccess'));
            form.reset();
        } else {
            toast(t("contact.error"))
        }
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