import {Text, View} from "react-native";
import {GenericText, GlobalContainer, Input, InputArea} from "@/src/styles/globalStyle";
import {Container} from "@/src/styles/telaInicial/style";
import {ButtonsArea} from "@/src/styles/autenticacao/autenticacaoStyle";
import {StyledButton, TextButton} from "@/src/styles/indexStyle";

export default function CadastrarOrdem(){
    return(
        <GlobalContainer>
            <Container>
                <GenericText
                marginBottom={40}
                tamanho={24}
                >Cadastrar Ordem</GenericText>
                <InputArea>
                    <Input placeholder={'Informe o nome do cliente'}/>
                </InputArea>
                <InputArea>
                    <Input placeholder={'Informe o número de telefone do cliente'}/>
                </InputArea>
                <InputArea>
                    <Input placeholder={'Digite a marca do equipamento'}/>
                </InputArea>
                <InputArea>
                    <Input placeholder={'Digite o Modelo do equipamento'}/>
                </InputArea>
                <InputArea>
                    <Input placeholder={'Informe o defeito do equipamento'}/>
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
            </Container>
        </GlobalContainer>
    )
}