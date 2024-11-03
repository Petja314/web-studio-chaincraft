import React, {useTransition} from 'react';
import {useLocale} from "next-intl";
import {useRouter} from "next/navigation";


const LanguageButton = ({ className }) => {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const locale = useLocale();
    const nextLocale = locale === 'ru' ? 'en' : 'ru';



    const langSwitcher = () => {
        startTransition(() => {
            router.replace(`/${nextLocale}`)
        })
    }
    return (
        <div>
            <button onClick={langSwitcher} className={`translate_btn language_btn ${className}`}>
                {nextLocale}
            </button>
        </div>
    );
};

export default LanguageButton;