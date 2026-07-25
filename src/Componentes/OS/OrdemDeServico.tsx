import {
  Card,
  OsInformatrion,
  OsInformatrionArea,
  StatusOrdem,
} from "@/src/Componentes/OS/styles";
import { OrdemDeServicoDTO } from "@/src/interfaces/OrdemDeServico";
import { GenericText } from "@/src/styles/globalStyle";

interface Props {
  ordem: OrdemDeServicoDTO;
  onPress?: () => void; // Mude de Double para number
}

export default function OrdemDeServico({ ordem, onPress }: Props) {
  return (
    <Card onPress={onPress}>
      <OsInformatrionArea>
        {/* Converta o ID para String se ainda der erro */}
        <GenericText cor="#000">ORDEM: {String(ordem.id)}</GenericText>
        <StatusOrdem />
      </OsInformatrionArea>

      <OsInformatrion>
        <GenericText cor="#000">Cliente: {ordem.nomeDoCliente}</GenericText>

        {/* CRITICAL: Use .toLocaleDateString() ou .toDateString() */}
        <GenericText cor="#000">
          Data entrada: {ordem.dataDeAbertura}
        </GenericText>
        <GenericText cor="#000">
          Data finalizado: {ordem.dataFechamento}
        </GenericText>

        {/* Formatação de Moeda para o ValorFinal */}
        <GenericText cor="#000">Valor: R$ </GenericText>
      </OsInformatrion>
    </Card>
  );
}
