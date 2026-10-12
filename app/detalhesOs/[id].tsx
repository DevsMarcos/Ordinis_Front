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
            <GenericText cor="#000" tamanho={24} marginBottom={15}>
              Dados da OS
            </GenericText>
            <GenericText cor="#000" tamanho={20}>
              Cliente: {ordem.nomeDoCliente}
            </GenericText>
            <GenericText cor="#000" tamanho={18}>
              Telefone: {ordem.telefone}
            </GenericText>
            <GenericText cor="#000" tamanho={18}>
              Data de Abertura: {ordem.dataDeAbertura}
            </GenericText>
            <GenericText cor="#000" tamanho={18}>
              Data de Fechamento: {ordem.dataFechamento}
            </GenericText>
          </GenericCard>
        </CardsArea>

        <CardsArea>
          <GenericCard align="left">
            <GenericText cor="#000" tamanho={24} marginBottom={15}>
              Dados do Equipamento
            </GenericText>
            <GenericText cor="#000" tamanho={20}>
              Tipo Produto: {ordem.produto}
            </GenericText>
            <GenericText cor="#000" tamanho={18}>
              Marca: {ordem.marca}
            </GenericText>
            <GenericText cor="#000" tamanho={18}>
              Modelo: {ordem.modelo}
            </GenericText>
            <GenericText cor="#000" tamanho={18}>
              Serial:
            </GenericText>
          </GenericCard>
        </CardsArea>

        <CardsArea>
          <GenericCard align="left">
            <GenericText cor="#000" tamanho={24} marginBottom={15}>
              Imagens do Produto
            </GenericText>
          </GenericCard>
        </CardsArea>
      </StyledScrollView>
    </GlobalContainer>
  );
}
