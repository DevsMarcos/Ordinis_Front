import {
  ButtonsArea,
  Container,
  Input,
  InputArea,
  LogoContainer,
} from "@/src/styles/autenticacao/autenticacaoStyle";
import { GenericText, GlobalContainer } from "@/src/styles/globalStyle";
import { StyledButton } from "@/src/styles/indexStyle";
import { useRouter } from "expo-router";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function Login() {
  const router = useRouter();
  return (
    <GlobalContainer>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <LogoContainer></LogoContainer>
        <Container>
          <InputArea>
            <GenericText paddingLeft={10}>E-mail</GenericText>
            <Input placeholder={"E-mail"}></Input>
          </InputArea>
          <InputArea>
            <GenericText paddingLeft={10}>Senha</GenericText>
            <Input placeholder={"Senha"} secureTextEntry></Input>
          </InputArea>
          <ButtonsArea>
            <StyledButton onPress={() => router.push("/TodasAsOrdens")}>
              <GenericText cor="#000">Logar</GenericText>
            </StyledButton>
          </ButtonsArea>
        </Container>
      </KeyboardAvoidingView>
    </GlobalContainer>
  );
}
