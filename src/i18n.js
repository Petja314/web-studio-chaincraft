import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
// Can be imported from a shared config
const locales = ['en', 'ru'];

export default getRequestConfig(async ({locale}) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale)) notFound();

    return {
        // messages: (await import(`../messages/${locale}/translation.json`)).default
        messages: (await import(`../messages/${locale}/translation.json`)).default
        // messages: (await import(`../messages/${locale}/case2.json`)).default
    };
});