"use client";

import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Agents from "@/components/ui/Agents"; // Import do componente Agents
import { useTranslations, useLocale } from "@/lib/i18n";
import Links from "@/components/ui/Links";
import HeroSection from "@/components/ui/HeroSection";
import FeaturesSection from "@/components/ui/FeaturesSection";
import { useAuth } from "@/hooks/Auth/useAuth/useAuth";

export default function Home() {
  const { user } = useAuth();
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <Navbar user={user} />

      <main className="bg-dark-custom text-light">
        <HeroSection />

        {/* Why Section */}
        <section className="py-20 px-4 bg-gray-950">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t("whyPlatform_title")}
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                  {t("whyPlatform_description")}
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://placehold.co/600x400/111827/9ca3af?text=Dashboards+Personalizáveis"
                  alt="Custom Dashboards"
                  className="rounded-lg shadow-2xl w-full max-w-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Secção "A Solução" */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center md:order-last">
                <img
                  src="https://placehold.co/600x400/111827/9ca3af?text=Análise+Guiada+por+IA"
                  alt="Análise Guiada por IA"
                  className="rounded-lg shadow-2xl w-full max-w-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t("solution_title")}
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                  {t("solution_description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AGENTS Section - Agora usando o componente */}
        <Agents />

        {/* Features Section */}
        <FeaturesSection />

        {/* CTA Section */}
        <section className="py-5 bg-gradient-to-r from-teal-900 to-blue-900">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="display-4 fw-bold text-white mb-4">
                  {t("cta_title")}
                </h2>
                <p className="lead text-light mb-5">{t("cta_description")}</p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <Links
                    href="/login"
                    className="btn btn-teal btn-lg rounded-pill px-5 py-3 fw-bold"
                  >
                    {t("cta_freeTrial")}
                  </Links>
                  <Links
                    href="/plans"
                    className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold"
                  >
                    {t("cta_viewPlans")}
                  </Links>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
