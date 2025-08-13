import { useState, useCallback } from "react";
import { Agent, createAgent } from "../../../Transporters/Agents/getAgents";

export interface UseCreateAgentReturn {
  createAgent: (
    agent: Omit<Agent, "id" | "createdAt" | "updatedAt">
  ) => Promise<Agent>;
  loading: boolean;
  error: string | null;
}

export const useCreateAgent = (): UseCreateAgentReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreateAgent = useCallback(
    async (
      agentData: Omit<Agent, "id" | "createdAt" | "updatedAt">
    ): Promise<Agent> => {
      setLoading(true);
      setError(null);

      try {
        const newAgent = await createAgent(agentData);
        return newAgent;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to create agent";
        setError(errorMessage);
        throw new Error(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    createAgent: handleCreateAgent,
    loading,
    error,
  };
};

export default useCreateAgent;
