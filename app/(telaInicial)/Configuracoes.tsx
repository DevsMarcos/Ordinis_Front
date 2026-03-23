import {GenericText, GlobalContainer} from "@/src/styles/globalStyle";
import { Container, StyledScrollView} from "@/src/styles/telaInicial/style";
import DirectoryOption from "@/src/Componentes/DirectoryOption/DirectoryOption";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Entypo from '@expo/vector-icons/Entypo';


export default function Configuracoes() {
    return(
        <GlobalContainer>
            <Container centralizacao={"center"}>
                <StyledScrollView>
                    <GenericText tamanho={27}>Configurações</GenericText>
                    <DirectoryOption icons={<Feather name="user" size={24} color="black" />} titulo={"Perfil e Conta"}/>
                    <DirectoryOption icons={<Ionicons name="settings-outline" size={24} color="black" />} titulo={"Preferências do Aplicativo"}/>
                    <DirectoryOption icons={<Entypo name="network" size={24} color="black" />} titulo={"Configurações de Trabalho"}/>
                    <DirectoryOption icons={<SimpleLineIcons name="support" size={24} color="black" />} titulo={"Suporte e Legal"}/>
                    <DirectoryOption icons={<Ionicons name="exit-outline" size={24} color="black" />} titulo={"Sair"}/>
                </StyledScrollView>
            </Container>
        </GlobalContainer>
    )
}