"use client";

import { useTranslations } from "@/lib/i18n";

export default function FeaturesSection() {
  const t = useTranslations("Home");

  return (
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
              <p className="text-light">{t("features.simple.description")}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <i className="bi bi-lightning display-4 text-teal mb-3"></i>
              <h4 className="text-white fw-bold mb-3">
                {t("features.realtime.title")}
              </h4>
              <p className="text-light">{t("features.realtime.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
