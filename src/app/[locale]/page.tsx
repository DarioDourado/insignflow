"use client";

import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SuperHeroCard from "@/components/ui/SuperHeroCard";
import { useAuth } from "@/hooks/useAuth";
import { useTranslations, useLocale } from "@/lib/i18n";

export default function Home() {
  const { user } = useAuth();
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <>
      <Navbar user={user} />

      <main className="bg-dark-custom text-light">
        {/* Hero Section */}
        <section
          className="d-flex align-items-center justify-content-center text-center position-relative"
          style={{ minHeight: "100vh", paddingTop: "80px" }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
            style={{ opacity: 0.7 }}
          ></div>
          <div className="container position-relative" style={{ zIndex: 10 }}>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h1 className="display-2 fw-bold text-white mb-4">
                  {t("hero.title")}
                </h1>
                <p className="lead fs-4 text-light mb-5">
                  {t("hero.subtitle")}
                </p>
                <Link
                  href={`/${locale}/login`}
                  className="btn btn-teal btn-lg rounded-pill px-5 py-3 fw-bold"
                >
                  {t("hero.cta")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5 bg-dark-secondary">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <h2 className="display-4 fw-bold text-white mb-4">
                  {t("features.title")}
                </h2>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="text-center">
                  <i className="bi bi-cpu display-4 text-teal mb-3"></i>
                  <h4 className="text-white fw-bold mb-3">
                    {t("features.ai.title")}
                  </h4>
                  <p className="text-light">{t("features.ai.description")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <i className="bi bi-palette display-4 text-teal mb-3"></i>
                  <h4 className="text-white fw-bold mb-3">
                    {t("features.simple.title")}
                  </h4>
                  <p className="text-light">
                    {t("features.simple.description")}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <i className="bi bi-lightning display-4 text-teal mb-3"></i>
                  <h4 className="text-white fw-bold mb-3">
                    {t("features.realtime.title")}
                  </h4>
                  <p className="text-light">
                    {t("features.realtime.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <Link
                    href={`/${locale}/login`}
                    className="btn btn-teal btn-lg rounded-pill px-5 py-3 fw-bold"
                  >
                    {t("hero.freeTrial")}
                  </Link>
                  <Link
                    href={`/${locale}/plans`}
                    className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold"
                  >
                    Ver Planos
                  </Link>
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
