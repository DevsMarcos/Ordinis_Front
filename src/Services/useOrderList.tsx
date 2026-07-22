import api from "./api";

type Order = {
  id: number;
  status: string;
  nomeDoCliente: string;
  telefone: string;
  produto: string;
  marca: string;
  modelo: string;
  caracteristicaProduto: string;
  dataDeAbertura: string;
  dataFechamento: string;
};

export const OrderListService = {
  fetchAllOrders: async (): Promise<Order[]> => {
    const response = await api.get<Order[]>(`ordens/buscarOrdens`);

    return response.data;
  },
};
