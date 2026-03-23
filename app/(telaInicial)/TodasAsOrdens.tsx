import { GlobalContainer, Input, InputArea} from "@/src/styles/globalStyle";
import {
    Container,
    StyledScrollView
} from "@/src/styles/telaInicial/style";
import {Image} from "expo-image";
import OrdemDeServico from "@/src/Componentes/OS/OrdemDeServico";

export default function TodasAsOrdens(){
    return(
        <GlobalContainer>
            <Container>
                <StyledScrollView>
                <InputArea>
                    <Image source={'../../'}/>
                    <Input placeholder={'Pesquise o ID da OS ou o Nome do Cliente'}/>
                </InputArea>

                <OrdemDeServico
                ID={12345}
                NomeCliente={"Marcos"}
                ValorFinal={20}
                DataEntrada={new Date()}
                DataFinalizado={new Date()}
                />

                </StyledScrollView>
            </Container>
        </GlobalContainer>
    )
}