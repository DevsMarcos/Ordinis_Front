import { GlobalContainer } from "@/src/styles/globalStyle";
import {
    ButtonsArea,
    Container,
    Logo,
    LogoContainer,
    StyledButton,
    TextButton,
} from "@/src/styles/indexStyle";
import { useRouter } from "expo-router";
import image from "../assets/images/logo_gemini.png";

export default function Index() {
  const router = useRouter();

  return (
    <GlobalContainer>
      <Container>
        <LogoContainer>
          <Logo source={image} />
        </LogoContainer>
        <ButtonsArea>
          <StyledButton onPress={() => router.push("/Login")}>
            <TextButton>Logar</TextButton>
          </StyledButton>
          <StyledButton onPress={() => router.push("/Registro")}>
            <TextButton>Cadastrar</TextButton>
          </StyledButton>
        </ButtonsArea>
      </Container>
    </GlobalContainer>
  );
}
