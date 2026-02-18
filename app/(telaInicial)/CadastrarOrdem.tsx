import {KeyboardAvoidingView, Platform, Text, View} from "react-native";
import {GenericText, GlobalContainer, Input, InputArea} from "@/src/styles/globalStyle";
import {Container, StyledScrollView} from "@/src/styles/telaInicial/style";
import {ButtonsArea} from "@/src/styles/autenticacao/autenticacaoStyle";
import {StyledButton, TextButton} from "@/src/styles/indexStyle";

export default function CadastrarOrdem(){
    return(
        <GlobalContainer>
            <Container>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                >
                <StyledScrollView>
                <GenericText
                marginBottom={40}
                tamanho={24}>
                    Cadastrar Ordem
                </GenericText>
                    <InputArea>
                        <GenericText paddingLeft={10}>Nome do Cliente</GenericText>
                        <Input placeholder={'Informe o nome do cliente'}/>
                </InputArea>
                    <InputArea>
                        <GenericText paddingLeft={10}>Numero de telefone</GenericText>
                        <Input placeholder={'Informe o número de telefone do cliente'}/>
                </InputArea>
                    <InputArea>
                        <GenericText paddingLeft={10}>Marca do Equipamento</GenericText>
                        <Input placeholder={'Digite a marca do equipamento'}/>
                </InputArea>
                    <InputArea>
                        <GenericText paddingLeft={10}>Modelo do equipamento</GenericText>
                        <Input placeholder={'Digite o Modelo do equipamento'}/>
                    </InputArea>

                    <InputArea>
                        <GenericText  paddingLeft={10}>Defeito</GenericText>
                        <Input placeholder={'Informe o defeito do equipamento'} height={150}/>
                    </InputArea>

               <ButtonsArea>
                   <StyledButton>
                       <TextButton>Adicionar Fotografia</TextButton>
                   </StyledButton>
               </ButtonsArea>
               <ButtonsArea>
                   <StyledButton>
                       <TextButton>Salvar Ordem de Serviço</TextButton>
                   </StyledButton>
               </ButtonsArea>
                </StyledScrollView>
                </KeyboardAvoidingView>
            </Container>
        </GlobalContainer>
    )
}