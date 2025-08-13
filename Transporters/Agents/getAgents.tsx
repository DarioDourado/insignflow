export interface Agent {
  id: number;
  name: string;
  status: "active" | "inactive" | "suspended";
  power: string;
  imageSrc: string;
  delay?: string;
}

export interface GetAgentsParams {
  status?: Agent["status"];
  limit?: number;
  offset?: number;
}

export interface GetAgentsResponse {
  agents: Agent[];
}

const FAKE_AGENTS: Agent[] = [
  {
    id: 1,
    name: "Aura, a Orquestradora",
    power: "Super-poder: coordenar a equipa!",
    imageSrc: "/images/agents/aura.svg",
    status: "active",
    delay: "delay-0",
  },
  {
    id: 2,
    name: "Valeria, a Validadora",
    power: "Super-poder: purificação de dados!",
    imageSrc: "/images/agents/valeria.svg",
    delay: "delay-100",
    status: "active",
  },
  {
    id: 3,
    name: "Ingrid, a Engenheira de Qualidade",
    power: "Super-poder: moldar dados crus!",
    imageSrc: "/images/agents/ingrid.svg",
    delay: "delay-200",
    status: "active",
  },
  {
    id: 4,
    name: "Anselmo, o Analista Preditor",
    power: "Super-poder: previsão do futuro!",
    imageSrc: "/images/agents/anselmo.svg",
    delay: "delay-300",
    status: "active",
  },
  {
    id: 5,
    name: "Épsilon, a Explicadora",
    power: "Super-poder: traduzir insights!",
    imageSrc: "/images/agents/epsilon.svg",
    delay: "delay-400",
    status: "active",
  },
  {
    id: 6,
    name: "Rafael, o Relator",
    power: "Super-poder: contar histórias com dados!",
    imageSrc: "/images/agents/rafael.svg",
    delay: "delay-500",
    status: "active",
  },
];

export const getAgents = async (
  params: GetAgentsParams = {}
): Promise<GetAgentsResponse> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    let agent = [...FAKE_AGENTS];
    return {
      agents: agent,
    };
  } catch (error) {
    console.error("Error fetching agents:", error);
    throw error;
  }
};
