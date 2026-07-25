import { useEffect, useRef, useState } from "react";
import { OrdemDeServicoDTO } from "../interfaces/OrdemDeServico";
import { OrderService } from "../Services/useOrderList";

export default function useFetchOrderList() {
  const [ordem, setOrdem] = useState<OrdemDeServicoDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const isLoadingRef = useRef(false);

  useEffect(() => {
    fetchOrdens();
  }, []);

  const fetchOrdens = async (isRefresh = false) => {
    if (isLoadingRef.current) return;
    isLoadingRef.current = true;

    try {
      isRefresh ? setRefreshing(true) : setLoading(true);
      setErro(null);

      const data = await OrderService.fetchAllOrders();
      setOrdem(data);
    } catch {
      setErro("Erro ao buscar as Ordens de Serviço");
    } finally {
      setLoading(false);
      setRefreshing(false);
      isLoadingRef.current = false;
    }
  };

  return {
    ordem,
    loading,
    refreshing,
    erro,
    fetchOrdens,
  };
}
