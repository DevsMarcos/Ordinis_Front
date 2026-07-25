import styled from "styled-components/native";

interface ContainerProps {
  centralizacao?: string;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: #1a0046; /* Um cinza claro de fundo ajuda o card branco a destacar */
  align-items: ${(props) => props.centralizacao};
  padding-top: 50px;
`;

// Ajuste no ScrollView
// Ajuste no ScrollView
export const StyledScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 30, // Dá um respiro no final da lista
    paddingTop: "10%",
    alignItems: "center", // Centraliza tudo horizontalmente
  },
})`
  flex: 1;
  width: 100%;
`;

interface StatusProps {
  status?: string;
}
