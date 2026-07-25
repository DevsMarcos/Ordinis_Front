import useFetchOrderById from "@/src/Hooks/useFetchOrderById";
import { GlobalContainer } from "@/src/styles/globalStyle";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Text } from "react-native";

export default function DetalhesOS() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { ordem, loading } = useFetchOrderById(Number(id));

  if (loading) {
    return (
      <GlobalContainer>
        <ActivityIndicator size="large" />
      </GlobalContainer>
    );
  }

  if (!ordem) {
    return (
      <GlobalContainer>
        <Text>Ordem não encontrada.</Text>
      </GlobalContainer>
    );
  }

  return (
    <GlobalContainer>
      <Text>{ordem.nomeDoCliente}</Text>
      <Text>{ordem.produto}</Text>
      {/* resto dos campos da ordem */}
    </GlobalContainer>
  );
}
