import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { OrdemDeServicoDTO } from "../interfaces/OrdemDeServico";
import { OrderService } from "../Services/useOrderList";

type Parameter = {
  id: number;
};

export default function useFetchOrderById(id: number) {
  const [ordem, setOrdem] = useState<OrdemDeServicoDTO | null>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOrdem(id);
  }, [id]);

  const fetchOrdem = async (id: number) => {
    setLoading(true);
    try {
      const data = await OrderService.fetchOrderByID(Number(id));
      setOrdem(data);
    } catch {
      Alert.alert("Erro ao buscar a Ordem se serviço especificada!");
    } finally {
      setLoading(false);
    }
  };

  return {
    ordem,
    loading,
  };
}
