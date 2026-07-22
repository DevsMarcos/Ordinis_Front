import api from "./api";

type Order = {
  id: number;
  nomeDoCliente: String;
  telefone: String;
  produto: String;
  marca: String;
  modelo: String;
  caracteristicaProduto: String;
};

export const useOrderList = {
  fetchOrder: async (id: number): Promise<Order> => {
    const response = await api.get<Order>(`ordens/buscarPorId/${id}`);

    return response.data;
  },
};
