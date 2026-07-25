import GenericCard from "@/src/Componentes/GenericCard/GenericCard";
import useFetchOrderById from "@/src/Hooks/useFetchOrderById";
import {
  CardsArea,
  GenericText,
  GlobalContainer,
  StyledScrollView,
} from "@/src/styles/globalStyle";
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
      <StyledScrollView>
        <CardsArea>
          <GenericCard>
            <GenericText cor="#000" tamanho={20}>
              Ordem de Serviço: {ordem.id}
            </GenericText>
          </GenericCard>
          {/* 
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard /> */}
        </CardsArea>
      </StyledScrollView>
    </GlobalContainer>
  );
}
