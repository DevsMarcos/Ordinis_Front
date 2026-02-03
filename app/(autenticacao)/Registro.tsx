import {GenericText, GlobalContainer} from "@/src/styles/globalStyle";
import {ButtonsArea, Container, Header, Input, InputArea} from "@/src/styles/autenticacao/autenticacaoStyle";
import {StyledButton} from "@/src/styles/indexStyle";
import {View, Text, Button, KeyboardAvoidingView, Platform, ScrollView} from "react-native";


export default function Registro(){
    return(
        <GlobalContainer>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView>
                    <Container>
                        <InputArea>
                            <GenericText paddingLeft={10}>Nome/Razão Social</GenericText>
                            <Input placeholder={"Nome/Razão Social"}></Input>
                        </InputArea>
                        <InputArea>
                            <GenericText paddingLeft={10}>CPF/CNPJ</GenericText>
                            <Input placeholder={"CPF/CNPJ"} secureTextEntry ></Input>
                        </InputArea>
                        <InputArea>
                            <GenericText paddingLeft={10}>Telefone</GenericText>
                            <Input placeholder={"Telefone"} secureTextEntry ></Input>
                        </InputArea>
                        <InputArea>
                            <GenericText paddingLeft={10}>Email</GenericText>
                            <Input placeholder={"Email"} secureTextEntry ></Input>
                        </InputArea>
                        <InputArea>
                            <GenericText paddingLeft={10}>Senha</GenericText>
                            <Input placeholder={"Senha"} secureTextEntry ></Input>
                        </InputArea>
                        <InputArea>
                            <GenericText paddingLeft={10}>Confirmar Senha</GenericText>
                            <Input placeholder={"Confirmar Senha"} secureTextEntry ></Input>
                        </InputArea>
                        <ButtonsArea>
                            <StyledButton>
                                <GenericText>Cadastrar-se</GenericText>
                            </StyledButton>
                        </ButtonsArea>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </GlobalContainer>
    )
}