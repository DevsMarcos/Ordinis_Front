import {View, Text, Button, KeyboardAvoidingView, Platform} from "react-native";
import {useRouter} from "expo-router";
import {GenericText, GlobalContainer} from "@/src/styles/globalStyle";
import {
    ButtonsArea,
    Container,
    Header,
    Input,
    InputArea, Logo,
    LogoContainer
} from "@/src/styles/autenticacao/autenticacaoStyle";
import {StyledButton} from "@/src/styles/indexStyle";
import image from "../../assets/images/image2.jpg";


export default function Login(){

    const router = useRouter();
    return(
        <GlobalContainer>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <LogoContainer>
                    <Logo source={image}/>
                </LogoContainer>
                <Container >
                    <InputArea>
                        <GenericText paddingLeft={10}>E-mail</GenericText>
                        <Input placeholder={"E-mail"}></Input>
                    </InputArea>
                    <InputArea>
                        <GenericText paddingLeft={10}>Senha</GenericText>
                        <Input placeholder={"Senha"} secureTextEntry ></Input>
                    </InputArea>
                   <ButtonsArea>
                       <StyledButton>
                           <GenericText>Logar</GenericText>
                       </StyledButton>
                   </ButtonsArea>
                </Container>
            </KeyboardAvoidingView>
        </GlobalContainer>

    )
}