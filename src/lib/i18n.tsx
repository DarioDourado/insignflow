"use client";

import React, { createContext, useContext, ReactNode } from "react";

interface I18nContextType {
  locale: string;
  messages: Record<string, any>;
  t: (key: string, namespace?: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

interface I18nProviderProps {
  locale: string;
  messages: Record<string, any>;
  children: ReactNode;
}

export function I18nProvider({
  locale,
  messages,
  children,
}: I18nProviderProps): React.JSX.Element {
  const t = (key: string, namespace?: string) => {
    try {
      if (namespace) {
        return messages[namespace]?.[key] || key;
      }
      return messages[key] || key;
    } catch (error) {
      return key;
    }
  };

  const value = {
    locale,
    messages,
    t,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslations(namespace?: string) {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslations must be used within I18nProvider");
  }

  return (key: string) => context.t(key, namespace);
}

export function useLocale() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useLocale must be used within I18nProvider");
  }
  return context.locale;
}
