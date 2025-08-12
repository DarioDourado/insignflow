"use client";

import { useTranslations } from "@/lib/i18n";
import Links from "./Links";

export default function CTASection() {
  const t = useTranslations("Home");

  return (
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
  );
}
