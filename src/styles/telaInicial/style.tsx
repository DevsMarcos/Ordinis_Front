import styled from "styled-components/native";

interface ContainerProps {
  centralizacao?: string;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: #f5f5f5; /* Um cinza claro de fundo ajuda o card branco a destacar */
  align-items: ${(props) => props.centralizacao};
  padding-top: 50px;
`;

// Ajuste no ScrollView
