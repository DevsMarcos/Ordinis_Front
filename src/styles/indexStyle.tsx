import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonsArea = styled.View`
  width: 80%; /* Aumentei um pouco para ficar melhor visualmente */
  /* Remova a height fixa de % se quiser que ela cresça com os botões */
  padding: 20px;
  gap: 10px; /* Adiciona espaçamento entre os botões de forma fácil */
`;

export const StyledButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
  // Diminui a opacidade para 70% ao tocar
})`
  width: 100%;
  height: 60px; /* Agora ele vai obedecer */
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-family: "Roboto Bold";
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;

export const LogoContainer = styled.View`
  width: 100%;
  height: 50%;
`;
