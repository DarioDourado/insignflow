"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useLocale, useTranslations } from "@/lib/i18n";
import { useAuth } from "@/hooks/Auth/useAuth/useAuth";
import { getPlansData } from "@/config/data/staticData/plansData";

export default function Plans() {
  const { user } = useAuth();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations();

  const plansData = getPlansData(router, t);

  return (
    <>
      <Navbar user={user} />
      <main className="text-gray-200 bg-gray-900 min-h-screen pt-20">
        <section className="container mx-auto p-8 max-w-6xl">
          <h1 className="text-4xl font-bold text-center text-teal-400 mb-6">
            {t("plans_title")}
          </h1>
          <p className="text-lg text-center text-gray-400 max-w-3xl mx-auto mb-12">
            {t("plans_description")}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {plansData.map((plan, index) => (
              <div
                key={index}
                className="bg-gray-950 p-8 rounded-lg shadow-xl flex flex-col justify-between border border-gray-700 hover:border-teal-500 transition-colors duration-300"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white">{plan.name}</h2>
                  <p className="mt-2 text-gray-400">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold text-teal-400">
                      {plan.price}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-2 text-gray-300">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-teal-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={plan.buttonAction}
                  className="mt-8 w-full px-4 py-3 bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold rounded-lg transition-colors duration-300"
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
