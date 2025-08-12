"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function AboutUs() {
  const { user } = useAuth();

  return (
    <>
      <Navbar user={user} />

      <main className="text-gray-200 bg-gray-900 min-h-screen pt-20">
        <section className="container mx-auto p-8 max-w-6xl">
          <div className="bg-gray-950 p-8 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold text-teal-400 mb-6">
              A Nossa Missão: Democratizar a Análise de Dados.
            </h1>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Na InsightFlow, a nossa visão é transformar a era da informação
                numa era de decisões inteligentes e acionáveis. A plataforma foi
                criada para quebrar o ciclo de dados esquecidos nas PMEs,
                oferecendo uma ferramenta poderosa e acessível para todos,
                independentemente do seu nível de experiência.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Os Nossos Pilares
              </h2>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold text-teal-400">
                    Transparência:
                  </span>{" "}
                  Cada ação e resultado da análise é registado e pode ser
                  revisto, garantindo total confiança nos insights gerados.
                </li>
                <li>
                  <span className="font-semibold text-teal-400">
                    Assistência Inteligente:
                  </span>{" "}
                  A nossa IA sugere os melhores caminhos analíticos, mas o
                  controlo final permanece sempre nas suas mãos.
                </li>
                <li>
                  <span className="font-semibold text-teal-400">
                    Flexibilidade:
                  </span>{" "}
                  Permite-lhe personalizar o percurso analítico de acordo com as
                  suas necessidades específicas.
                </li>
                <li>
                  <span className="font-semibold text-teal-400">
                    Reprodutibilidade:
                  </span>{" "}
                  As análises podem ser facilmente repetidas e os resultados
                  exportados para relatórios e apresentações.
                </li>
              </ul>

              <p className="mt-6">
                A nossa tecnologia baseia-se num pipeline analítico modular que
                guia o utilizador de forma intuitiva, desde a ingestão de dados
                até à interpretação dos resultados. Acreditamos que o acesso à
                ciência de dados não deve ser um privilégio, mas sim uma
                ferramenta para o crescimento de qualquer negócio.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
function useAuth(): { user: any } {
  throw new Error("Function not implemented.");
}
