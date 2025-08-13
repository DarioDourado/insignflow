import { useState, useCallback } from "react";
import { Agent, updateAgent } from "../../../Transporters/Agents/getAgents";

export interface UseUpdateAgentReturn {
  updateAgent: (id: string, updates: Partial<Agent>) => Promise<Agent>;
  loading: boolean;
  error: string | null;
}

export const useUpdateAgent = (): UseUpdateAgentReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpdateAgent = useCallback(
    async (id: string, updates: Partial<Agent>): Promise<Agent> => {
      setLoading(true);
      setError(null);

      try {
        const updatedAgent = await updateAgent(id, updates);
        return updatedAgent;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to update agent";
        setError(errorMessage);
        throw new Error(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    updateAgent: handleUpdateAgent,
    loading,
    error,
  };
};

export default useUpdateAgent;
