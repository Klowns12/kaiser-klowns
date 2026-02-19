"use client";

import { TranslationProvider } from './i18n/TranslationContext';

export function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <TranslationProvider>
            {children}
        </TranslationProvider>
    );
}
