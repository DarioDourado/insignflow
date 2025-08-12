"use client";

import { useTranslations, useLocale } from "@/lib/i18n";
import Links from "./Links";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
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
            <h1 className="display-2 fw-bold text-white mb-4">{t("title")}</h1>
            <p className="lead fs-4 text-light mb-5">{t("subtitle")}</p>
            <Links
              href={`/login`}
              className="btn btn-teal btn-lg rounded-pill px-5 py-3 fw-bold"
            >
              {t("cta")}
            </Links>
          </div>
        </div>
      </div>
    </section>
  );
}
