"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useAuth } from "@/hooks/Auth/useAuth/useAuth";
import { useTranslations } from "@/lib/i18n"; // 1. Importa o hook de tradução

export default function AboutUs() {
  const { user } = useAuth();
  const t = useTranslations(); // 2. Usa o hook

  return (
    <>
      <Navbar user={user} />

      <main className="text-gray-200 bg-gray-900 min-h-screen pt-20">
        <section className="container mx-auto p-8 max-w-6xl">
          <div className="bg-gray-950 p-8 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold text-teal-400 mb-6">
              {t("about_title")}
            </h1>
            <div className="space-y-6 text-lg text-gray-300">
              <p>{t("about_description")}</p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t("about_pillars_title")}
              </h2>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold text-teal-400">
                    {t("about_pillar_transparency_title")}
                  </span>{" "}
                  {t("about_pillar_transparency_desc")}
                </li>
                <li>
                  <span className="font-semibold text-teal-400">
                    {t("about_pillar_assistance_title")}
                  </span>{" "}
                  {t("about_pillar_assistance_desc")}
                </li>
                <li>
                  <span className="font-semibold text-teal-400">
                    {t("about_pillar_flexibility_title")}
                  </span>{" "}
                  {t("about_pillar_flexibility_desc")}
                </li>
                <li>
                  <span className="font-semibold text-teal-400">
                    {t("about_pillar_reproducibility_title")}
                  </span>{" "}
                  {t("about_pillar_reproducibility_desc")}
                </li>
              </ul>

              <p className="mt-6">{t("about_technology")}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
