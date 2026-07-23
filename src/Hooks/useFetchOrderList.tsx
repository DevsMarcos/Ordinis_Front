import { useEffect, useRef, useState } from "react";
import { OrdemDeServicoDTO } from "../interfaces/OrdemDeServico";
import { OrderListService } from "../Services/useOrderList";

export default function useFetchOrderList() {
  const [ordem, setOrdem] = useState<OrdemDeServicoDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const isLoadingRef = useRef(false);

  useEffect(() => {
    fetchOrdens();
  }, []);

  const fetchOrdens = async () => {
    if (isLoadingRef.current) return;
    isLoadingRef.current = true;

    try {
      setLoading(true);

      const data = await OrderListService.fetchAllOrders();

      setOrdem(data);
    } catch {
      console.log("Erro ao buscar as Ordens de Serviço");
    } finally {
      setLoading(false);
      isLoadingRef.current = false;
    }
  };

  return {
    ordem,
    loading,
    fetchOrdens,
  };
}
