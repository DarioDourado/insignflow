"use client";

import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SuperHeroCard from "@/components/ui/SuperHeroCard";
import { useTranslations, useLocale } from "@/lib/i18n";
import Links from "@/components/ui/Links";
import HeroSection from "@/components/ui/HeroSection";
import FeaturesSection from "@/components/ui/FeaturesSection";
import { useAuth } from "@/hooks/Auth/useAuth/useAuth";

export default function Home() {
  const { user } = useAuth();
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <>
      <Navbar user={user} />

      <main className="bg-dark-custom text-light">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* CTA Section */}
        <section className="py-5 bg-gradient-to-r from-teal-900 to-blue-900">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="display-4 fw-bold text-white mb-4">
                  Pronto para Transformar os Seus Dados?
                </h2>
                <p className="lead text-light mb-5">
                  Junte-se a milhares de empresas que já descobriram o poder dos
                  insights inteligentes.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <Links
                    href={`/login`}
                    className="btn btn-teal btn-lg rounded-pill px-5 py-3 fw-bold"
                  >
                    {t("hero.freeTrial")}
                  </Links>
                  <Links
                    href={`/plans`}
                    className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold"
                  >
                    Ver Planos
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
