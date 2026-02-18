import {FlatList, Text, View} from "react-native";
import {GenericText, GlobalContainer, Input, InputArea} from "@/src/styles/globalStyle";
import {
    Card,
    Container,
    OsInformatrion,
    OsInformatrionArea,
    StatusOrdem, StyledScrollView
} from "@/src/styles/telaInicial/style";
import {Image} from "expo-image";

export default function TodasAsOrdens(){

    return(
        <GlobalContainer>
            <Container>
                <StyledScrollView>
                <InputArea>
                    <Image source={'../../'}/>
                    <Input placeholder={'Pesquise o ID da OS ou o Nome do Cliente'}/>
                </InputArea>
                <Card>
                    <OsInformatrionArea>
                        <GenericText>ORDEM: 12345</GenericText>
                        <StatusOrdem />
                    </OsInformatrionArea>
                    <OsInformatrion>
                        <GenericText>Cliente: Marcos Macêdo</GenericText>
                        <GenericText>Data entrada: 22/12/2025</GenericText>
                        <GenericText>Data finalizado: 30/12/2025</GenericText>
                        <GenericText>Valor: 0.00</GenericText>
                    </OsInformatrion>
                </Card>
                <Card>
                    <OsInformatrionArea>
                        <GenericText>ORDEM: 12345</GenericText>
                        <StatusOrdem />
                    </OsInformatrionArea>
                    <OsInformatrion>
                        <GenericText>Cliente: Marcos Macêdo</GenericText>
                        <GenericText>Data entrada: 22/12/2025</GenericText>
                        <GenericText>Data finalizado: 30/12/2025</GenericText>
                        <GenericText>Valor: 0.00</GenericText>
                    </OsInformatrion>
                </Card>
                <Card>
                    <OsInformatrionArea>
                        <GenericText>ORDEM: 12345</GenericText>
                        <StatusOrdem />
                    </OsInformatrionArea>
                    <OsInformatrion>
                        <GenericText>Cliente: Marcos Macêdo</GenericText>
                        <GenericText>Data entrada: 22/12/2025</GenericText>
                        <GenericText>Data finalizado: 30/12/2025</GenericText>
                        <GenericText>Valor: 0.00</GenericText>
                    </OsInformatrion>
                </Card>
                <Card>
                    <OsInformatrionArea>
                        <GenericText>ORDEM: 12345</GenericText>
                        <StatusOrdem />
                    </OsInformatrionArea>
                    <OsInformatrion>
                        <GenericText>Cliente: Marcos Macêdo</GenericText>
                        <GenericText>Data entrada: 22/12/2025</GenericText>
                        <GenericText>Data finalizado: 30/12/2025</GenericText>
                        <GenericText>Valor: 0.00</GenericText>
                    </OsInformatrion>
                </Card>
                <Card>
                    <OsInformatrionArea>
                        <GenericText>ORDEM: 12345</GenericText>
                        <StatusOrdem />
                    </OsInformatrionArea>
                    <OsInformatrion>
                        <GenericText>Cliente: Marcos Macêdo</GenericText>
                        <GenericText>Data entrada: 22/12/2025</GenericText>
                        <GenericText>Data finalizado: 30/12/2025</GenericText>
                        <GenericText>Valor: 0.00</GenericText>
                    </OsInformatrion>
                </Card>
                </StyledScrollView>
            </Container>
        </GlobalContainer>
    )
}