"use client";

import { useTranslations } from "@/lib/i18n";

export default function StatsSection() {
  const t = useTranslations("Home");

  const stats = [
    {
      number: "10K+",
      label: t("stats.users"),
    },
    {
      number: "1M+",
      label: t("stats.analyses"),
    },
    {
      number: "99.9%",
      label: t("stats.accuracy"),
    },
    {
      number: "99.99%",
      label: t("stats.uptime"),
    },
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
