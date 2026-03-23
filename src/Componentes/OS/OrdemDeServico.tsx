import {Card, OsInformatrion, OsInformatrionArea, StatusOrdem} from "@/src/Componentes/OS/styles";
import {GenericText} from "@/src/styles/globalStyle";
import {Double} from "react-native/Libraries/Types/CodegenTypes";

interface Props {
    NomeCliente: string;
    ID: number;           // Mude de bigint para number
    DataEntrada: Date;
    DataFinalizado: Date;
    ValorFinal: number;   // Mude de Double para number
}

export default function OrdemDeServico({ NomeCliente, ID, DataEntrada, DataFinalizado, ValorFinal }: Props) {
    return (
        <Card>
            <OsInformatrionArea>
                {/* Converta o ID para String se ainda der erro */}
                <GenericText>ORDEM: {String(ID)}</GenericText>
                <StatusOrdem />
            </OsInformatrionArea>

            <OsInformatrion>
                <GenericText>Cliente: {NomeCliente}</GenericText>

                {/* CRITICAL: Use .toLocaleDateString() ou .toDateString() */}
                <GenericText>Data entrada: {DataEntrada.toLocaleDateString('pt-BR')}</GenericText>
                <GenericText>Data finalizado: {DataFinalizado.toLocaleDateString('pt-BR')}</GenericText>

                {/* Formatação de Moeda para o ValorFinal */}
                <GenericText>Valor: R$ {ValorFinal.toFixed(2)}</GenericText>
            </OsInformatrion>
        </Card>
    )
}