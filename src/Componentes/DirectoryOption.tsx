import {GenericText, GlobalContainer} from "@/src/styles/globalStyle";
import {Container, IconArea, TextArea} from "./DirectoryOptionStyle";
import {JSX, ReactNode} from "react";


interface Props {
    icons:ReactNode,
    titulo: string,
    onPress?: () => void;
}
export default function DirectoryOption({ icons, titulo, onPress  }: Props): JSX.Element {

    return(
        <Container onPress={onPress} activeOpacity={0.7}>
            <IconArea>
                {icons}
            </IconArea>
            <TextArea>
                <GenericText tamanho={18}>{titulo}</GenericText>
            </TextArea>
        </Container>
    )
}