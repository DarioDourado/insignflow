"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SuperHeroCard from "@/components/ui/SuperHeroCard";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { user } = useAuth();

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
                  Pare de Adivinhar. Comece a Decidir.
                </h1>
                <p className="lead fs-4 text-light mb-5">
                  A nossa plataforma de IA transforma os seus dados em insights
                  claros e acionáveis, dando-lhe o poder de tomar decisões
                  estratégicas com total confiança.
                </p>
                <Link
                  href="/login"
                  className="btn btn-teal btn-lg rounded-pill px-5 py-3 fw-bold"
                >
                  Começar a sua Análise Gratuita
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-5 bg-dark-secondary">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 className="display-4 fw-bold text-white mb-4">
                  Os seus dados são a sua maior vantagem competitiva.
                </h2>
                <p className="fs-5 text-light">
                  Mais de 80% das PMEs têm dados valiosos que não utilizam.
                  Ferramentas complexas e o custo de especialistas são barreiras
                  que a InsightFlow elimina, tornando a inteligência de dados
                  acessível a todos.
                </p>
              </div>
              <div className="col-lg-6 text-center">
                <Image
                  src="https://placehold.co/600x400/111827/9ca3af?text=Dashboards+Personalizáveis"
                  alt="Dashboards Personalizáveis"
                  width={600}
                  height={400}
                  className="img-fluid rounded shadow-lg"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-5 bg-dark-custom">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0 text-center">
                <Image
                  src="https://placehold.co/600x400/111827/9ca3af?text=Análise+Guiada+por+IA"
                  alt="Análise Guiada por IA"
                  width={600}
                  height={400}
                  className="img-fluid rounded shadow-lg"
                  unoptimized
                />
              </div>
              <div className="col-lg-6 order-lg-1">
                <h2 className="display-4 fw-bold text-white mb-4">
                  Análise de Dados Assistida por IA, sem complicação.
                </h2>
                <p className="fs-5 text-light">
                  A nossa interface visual e guiada por IA acompanha-o em cada
                  passo, do upload ao dashboard. Não precisa de ser um cientista
                  de dados ou de saber programar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Super Heroes Section */}
        <section className="py-5 bg-dark-secondary">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold text-white mb-4">
                Conheça os Vingadores de Dados!
              </h2>
              <p className="fs-5 text-light">
                A equipa de super-heróis de IA está pronta para transformar os
                seus dados em conhecimento com os seus poderes únicos.
              </p>
            </div>

            {/* Central Hero */}
            <div className="row justify-content-center mb-5">
              <div className="col-md-4 text-center">
                <div className="floating">
                  <SuperHeroCard
                    name="Aura, a Orquestradora"
                    power="coordenar a equipa!"
                    color="#8B5CF6"
                  />
                </div>
              </div>
            </div>

            {/* Other Heroes */}
            <div className="row g-4 justify-content-center">
              <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                <div className="floating delay-1">
                  <SuperHeroCard
                    name="Valeria, a Validadora"
                    power="purificação de dados!"
                    color="#3B82F6"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                <div className="floating delay-2">
                  <SuperHeroCard
                    name="Ingrid, a Engenheira"
                    power="moldar dados crus!"
                    color="#10B981"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                <div className="floating delay-3">
                  <SuperHeroCard
                    name="Anselmo, o Preditor"
                    power="previsão do futuro!"
                    color="#FBBF24"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                <div className="floating delay-4">
                  <SuperHeroCard
                    name="Épsilon, a Explicadora"
                    power="traduzir insights!"
                    color="#F43F5E"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                <div className="floating delay-5">
                  <SuperHeroCard
                    name="Rafael, o Relator"
                    power="comunicar insights!"
                    color="#14B8A6"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 bg-dark-custom text-center">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="display-4 fw-bold text-white mb-4">
                  Pronto para Elevar a sua Análise de Dados?
                </h2>
                <p className="fs-5 text-light mb-5">
                  Descubra o plano ideal para si ou para a sua empresa e
                  desbloqueie o potencial máximo da nossa plataforma de IA.
                </p>
                <Link
                  href="/plans"
                  className="btn btn-teal btn-lg rounded-pill px-5 py-3 fw-bold"
                >
                  Conheça já os nossos planos
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-5 bg-dark-secondary">
          <div className="container py-5">
            <h2 className="display-4 fw-bold text-center text-white mb-5">
              O que os nossos clientes dizem
            </h2>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="card bg-dark-tertiary border-0 h-100">
                  <div className="card-body border-start border-4 border-info">
                    <blockquote className="blockquote text-light">
                      "Nunca pensei que analisar os comentários dos nossos
                      clientes fosse tão fácil. Hoje, decidimos o próximo
                      lançamento de vinho com confiança."
                    </blockquote>
                    <footer className="blockquote-footer text-teal mt-3">
                      Joana Silva, <cite>gestora na Vinícola Monte Velho</cite>
                    </footer>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card bg-dark-tertiary border-0 h-100">
                  <div className="card-body border-start border-4 border-info">
                    <blockquote className="blockquote text-light">
                      "Com a plataforma, percebi que certos brinquedos só
                      vendiam antes do Natal porque as descrições eram mais
                      detalhadas nos reviews dos clientes. Agora, vendemos 40%
                      mais em Dezembro."
                    </blockquote>
                    <footer className="blockquote-footer text-teal mt-3">
                      Luís Pinto, <cite>dono da Brinquelândia</cite>
                    </footer>
                  </div>
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
