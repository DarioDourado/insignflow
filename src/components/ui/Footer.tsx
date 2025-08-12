import Link from "next/link";
import { useTranslations, useLocale } from "@/lib/i18n";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <footer className="bg-gray-950 text-gray-400 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-teal-400 mb-4">InsightFlow</h3>
          <p className="text-sm">
            Democratizamos a análise de dados com o poder da IA, tornando os
            insights acessíveis a todas as empresas.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            {t("links")}
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href={`/${locale}`}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/about`}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/plans`}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Planos
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            {t("contact")}
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Termos de Serviço
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Política de Privacidade
              </Link>
            </li>
            <li>
              <p>Email: contacto@insightflow.com</p>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Siga-nos</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14 13.5h2.4l.6-3h-3v-1.1c0-.8.2-1.5 1.5-1.5H16V3.5c-.3 0-1.7-.1-3.2-.1-3.3 0-5.3 2-5.3 5.3V10.5h-3v3h3V24h3.7V13.5z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.767 0-.977.784-1.768 1.75-1.768s1.75.791 1.75 1.768c0 .977-.784 1.767-1.75 1.767zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.16-2.723-.951.565-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.076 0-5.579 2.503-5.579 5.58 0 .43.049.85.131 1.25-.992-.05-1.928-.52-2.775-1.22-1.025 1.762-.51 4.041 1.092 5.167-.781-.024-1.516-.239-2.158-.596v.07c0 2.709 1.932 4.965 4.491 5.483-.466.126-.957.195-1.464.195-.357 0-.704-.034-1.04-.1.722 2.236 2.802 3.863 5.275 3.91-.849.664-1.93.978-3.08.978-.202 0-.405-.015-.605-.036 2.298 1.474 5.03 2.336 7.973 2.336 9.563 0 14.79-7.925 14.79-14.79 0-.226-.005-.448-.014-.668 1.01-1.016 1.885-2.285 2.576-3.715z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm">
        <p>
          &copy; {currentYear} InsightFlow. {t("rights")}.
        </p>
      </div>
    </footer>
  );
}
