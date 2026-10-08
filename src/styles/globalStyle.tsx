import styled from "styled-components/native";

export const GlobalContainer = styled.View`
  flex: 1;
  background: #1f1f1f;
`;

interface TextoProps {
  tamanho?: number; // O '?' indica que é opcional

  cor?: string;

  paddingLeft?: number;

  marginBottom?: number;
}
export const GenericText = styled.Text<TextoProps>`
  font-family: "Roboto Bold";
  font-size: ${(props) => props.tamanho || 16}px;
  color: ${(props) => props.cor || "#ffffff"};
  font-weight: bold;
  padding-left: ${(props) => props.paddingLeft}px;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

export const StyledButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
  // Diminui a opacidade para 70% ao tocar
})`
  width: 100%;
  height: 60px; /* Agora ele vai obedecer */
  background-color: #26c8d4;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const InputArea = styled.View`
  width: 90%;
  align-items: flex-start;
  margin-bottom: 5%;
  flex-direction: column;
`;

interface InputProps {
  height?: number;
}
export const Input = styled.TextInput<InputProps>`
  width: 100%;
  height: ${(props) => props.height || 60}px;
  background: #fff;
  border-radius: 25px;
  padding-left: 10px;
`;

export const CardsArea = styled.View`
  flex: 1;
  width: 100%;
`;

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
