import api from "./api";

type Order = {
  id: number;
  status: string;
  nomeDoCliente: string;
  telefone: string;
  produto: string;
  marca: string;
  modelo: string;
  defeito: string;
  dataDeAbertura: string;
  dataFechamento: string;
};

type OrdemPost = {
  nomeDoCliente: string;
  telefone: string;
  produto: string;
  marca: string;
  modelo: string;
  defeito: string;
};

export const OrderService = {
  fetchAllOrders: async (): Promise<Order[]> => {
    const response = await api.get<Order[]>(`ordens/buscarOrdens`);

    return response.data;
  },

  createorder: async (data: OrdemPost): Promise<OrdemPost> => {
    const response = await api.post<OrdemPost>(`ordens/criarOrdem`, data);

    return response.data;
  },

  fetchOrderByID: async (id: number): Promise<Order> => {
    const response = await api.get<Order>(`ordens/buscarPorId/${id}`);

    return response.data;
  },
};
