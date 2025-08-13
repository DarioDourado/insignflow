import { I18nProvider } from "@/lib/i18n";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages = {};
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    console.warn(`Could not load messages for locale: ${locale}`);
    try {
      messages = (await import(`@/messages/pt.json`)).default;
    } catch {
      console.error("Could not load fallback messages");
    }
  }

  return (
    <>
      <I18nProvider locale={locale} messages={messages}>
        {children}
      </I18nProvider>
    </>
  );
}
