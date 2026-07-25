import { GenericText } from "@/src/styles/globalStyle";
import { JSX, ReactNode } from "react";
import { Container, IconArea, TextArea } from "./DirectoryOptionStyle";

interface Props {
  icons: ReactNode;
  titulo: string;
  onPress?: () => void;
}
export default function DirectoryOption({
  icons,
  titulo,
  onPress,
}: Props): JSX.Element {
  return (
    <Container onPress={onPress} activeOpacity={0.7}>
      <IconArea>{icons}</IconArea>
      <TextArea>
        <GenericText tamanho={18} cor="#000">
          {titulo}
        </GenericText>
      </TextArea>
    </Container>
  );
}
