"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useAuth } from "@/hooks/useAuth";
import { useLocale } from "@/lib/i18n";

export default function Plans() {
  const { user } = useAuth();
  const router = useRouter();
  const locale = useLocale();

  const plansData = [
    {
      name: "Free",
      description: "Acesso básico para começar a explorar a plataforma.",
      price: "€0",
      features: [
        "Sem agentes de IA",
        "1 análise por mês",
        "Apenas com modelos lineares",
        "Relatórios e partilha manual",
      ],
      buttonText: "Começar Gratuitamente",
      buttonAction: () => router.push(`/${locale}/login`),
    },
    {
      name: "Premium",
      description:
        "Funcionalidades avançadas para profissionais e pequenas empresas.",
      price: "€49/mês",
      features: [
        "Agente de Ingestão e Qualidade",
        "Análises ilimitadas",
        "Previsão dinâmica completa",
        "Relatórios e partilha completa",
      ],
      buttonText: "Adquirir Premium",
      buttonAction: () =>
        alert("Funcionalidade de pagamento em desenvolvimento!"),
    },
    {
      name: "Diamond",
      description:
        "Acesso total à equipa completa de agentes para grandes empresas.",
      price: "€199/mês",
      features: [
        "Equipa completa de agentes",
        "Análises ilimitadas",
        "Previsão dinâmica completa",
        "Relatórios e partilha completa",
      ],
      buttonText: "Adquirir Diamond",
      buttonAction: () =>
        alert("Funcionalidade de pagamento em desenvolvimento!"),
    },
  ];

  return (
    <>
      <Navbar user={user} />
      <main className="text-gray-200 bg-gray-900 min-h-screen pt-20">
        <section className="container mx-auto p-8 max-w-6xl">
          <h1 className="text-4xl font-bold text-center text-teal-400 mb-6">
            Escolha o Plano Perfeito para Si.
          </h1>
          <p className="text-lg text-center text-gray-400 max-w-3xl mx-auto mb-12">
            Os nossos planos são pensados para crescer com o seu negócio. Desde
            o acesso gratuito para começar até à equipa completa de agentes para
            profissionais e empresas.
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
