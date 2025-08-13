import { useState, useEffect, useCallback } from "react";
import {
  Agent,
  getAgents,
  GetAgentsParams,
} from "../../../Transporters/Agents/getAgents";

export interface UseGetAgentsOptions {
  autoFetch?: boolean;
  filters?: GetAgentsParams;
}

export interface UseGetAgentsReturn {
  agents: Agent[];
  loading: boolean;
  error: string | null;
  totalCount: number;
  fetchAgents: () => Promise<void>;
  refreshAgents: () => Promise<void>;
}

export const useGetAgents = (
  options: UseGetAgentsOptions = {}
): UseGetAgentsReturn => {
  const { autoFetch = true, filters } = options;

  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);

  const fetchAgents = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAgents(filters);
      setAgents(data.agents);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const refreshAgents = useCallback(async () => {
    await fetchAgents();
  }, [fetchAgents]);

  useEffect(() => {
    if (autoFetch) {
      fetchAgents();
    }
  }, [autoFetch, fetchAgents]);

  return {
    agents,
    loading,
    error,
    totalCount,
    fetchAgents,
    refreshAgents,
  };
};

export default useGetAgents;
