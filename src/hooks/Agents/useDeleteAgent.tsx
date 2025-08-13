import { useState, useCallback } from "react";
import { deleteAgent } from "../../../Transporters/Agents/getAgents";

export interface UseDeleteAgentReturn {
  deleteAgent: (id: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const useDeleteAgent = (): UseDeleteAgentReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDeleteAgent = useCallback(async (id: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      await deleteAgent(id);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to delete agent";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    deleteAgent: handleDeleteAgent,
    loading,
    error,
  };
};

export default useDeleteAgent;
