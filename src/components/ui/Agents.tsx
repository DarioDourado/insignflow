"use client";

import { useTranslations } from "@/lib/i18n";
import { useEffect, useState } from "react";
import Agent from "./Agent";
import {
  getAgents,
  type Agent as AgentType,
} from "../../../Transporters/Agents/getAgents";

export default function Agents() {
  const t = useTranslations();

  const [agents, setAgents] = useState<AgentType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        setLoading(true);
        const response = await getAgents();
        setAgents(response.agents);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto max-w-6xl text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("agent_title")}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            {t("agent_subtitle")}
          </p>
          <div className="text-white">Carregando agentes...</div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto max-w-6xl text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("agent_title")}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            {t("agent_subtitle")}
          </p>
          <div className="text-red-400">Erro ao carregar agentes: {error}</div>
        </div>
      </section>
    );
  }

  const mainAgent = agents.find((agent) => agent.name.includes("Aura"));
  const otherAgents = agents.filter((agent) => !agent.name.includes("Aura"));

  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto max-w-6xl text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t("agent_title")}
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          {t("subtitle")}
        </p>

        {mainAgent && (
          <Agent
            id={mainAgent.id}
            name={mainAgent.name}
            power={mainAgent.power}
            imageSrc={mainAgent.imageSrc}
            isHero={true}
          />
        )}

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {otherAgents.map((agent) => (
            <Agent
              key={agent.id}
              id={agent.id}
              name={agent.name}
              power={agent.power}
              imageSrc={agent.imageSrc}
              delay={agent.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
