import {
    Card,
    OsInformatrion,
    OsInformatrionArea,
    StatusOrdem,
} from "@/src/Componentes/OS/styles";
import { OrdemDeServicoDTO } from "@/src/interfaces/OrdemDeServico";
import { GenericText } from "@/src/styles/globalStyle";

interface Props {
  ordem: OrdemDeServicoDTO; // Mude de Double para number
}

export default function OrdemDeServico({ ordem }: Props) {
  return (
    <Card>
      <OsInformatrionArea>
        {/* Converta o ID para String se ainda der erro */}
        <GenericText>ORDEM: {String(ordem.id)}</GenericText>
        <StatusOrdem />
      </OsInformatrionArea>

      <OsInformatrion>
        <GenericText>Cliente: {ordem.nomeDoCliente}</GenericText>

        {/* CRITICAL: Use .toLocaleDateString() ou .toDateString() */}
        <GenericText>Data entrada: {ordem.dataDeAbertura}</GenericText>
        <GenericText>Data finalizado: {ordem.dataFechamento}</GenericText>

        {/* Formatação de Moeda para o ValorFinal */}
        <GenericText>Valor: R$ </GenericText>
      </OsInformatrion>
    </Card>
  );
}
