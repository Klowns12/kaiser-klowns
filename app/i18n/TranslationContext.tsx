"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { Locale, Dictionary } from './types';
import { en } from './dictionaries/en';
import { th } from './dictionaries/th';
import { zh } from './dictionaries/zh';
import { ja } from './dictionaries/ja';
import { fr } from './dictionaries/fr';
import { de } from './dictionaries/de';
import { ko } from './dictionaries/ko';
import { es } from './dictionaries/es';

const dictionaries: Record<Locale, Dictionary> = { en, th, zh, ja, fr, de, ko, es };

interface TranslationContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
    dict: Dictionary;
}

const TranslationContext = createContext<TranslationContextType>({
    locale: 'en',
    setLocale: () => { },
    t: (key: string) => key,
    dict: en,
});

export function TranslationProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>('en');
    const dict = dictionaries[locale];

    const t = useCallback((key: string): string => {
        const keys = key.split('.');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let value: any = dict;
        for (const k of keys) {
            value = value?.[k];
            if (value === undefined) return key;
        }
        return typeof value === 'string' ? value : key;
    }, [dict]);

    return (
        <TranslationContext.Provider value={{ locale, setLocale, t, dict }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation() {
    return useContext(TranslationContext);
}
