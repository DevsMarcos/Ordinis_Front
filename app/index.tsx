import { Text, View, Pressable, Button } from "react-native";
import { Link, useRouter } from 'expo-router';
import {ButtonsArea, Container, Logo, LogoContainer, StyledButton, TextButton} from "@/src/styles/indexStyle";
import image from "../assets/images/image2.jpg";


export default function Index() {

    const router = useRouter();

    return (
        <Container>
            <LogoContainer>
                <Logo source={image}/>
            </LogoContainer>
            <ButtonsArea>
                <StyledButton onPress={() => router.push('/Login')}>
                    <TextButton>Logar</TextButton>
                </StyledButton>
                <StyledButton onPress={() => router.push("/Registro")}>
                    <TextButton>Cadastrar</TextButton>
                </StyledButton>
            </ButtonsArea>

        </Container>
    );
}
