import {Styled} from "styled-components";
import styled from "styled-components/native";

interface Props {

    paddingTop?: number
}

export const Container = styled.View<Props>`
    flex: 1;
    align-items: center;
    padding-top: ${props => props.paddingTop};
`
export const Header = styled.View`
    width: 100%;
    align-items: center;
`


export const InputArea = styled.View`
    width: 90%;
    align-items: flex-start;
    margin-top: 20px;
`
export const Input = styled.TextInput`
    width: 100%;
    height: 60px;
    background: #d9d9d9;
    border-radius: 25px;
    padding-left: 10px;
`
export const ButtonsArea = styled.View`
    width: 80%; /* Aumentei um pouco para ficar melhor visualmente */
    /* Remova a height fixa de % se quiser que ela cresça com os botões */
    padding: 20px;
    gap: 10px; /* Adiciona espaçamento entre os botões de forma fácil */
`


export const Logo = styled.Image`
    width: 100%;
    height: 100%;
`

export const LogoContainer = styled.View`
    width: 100%;
    height: 50%;
`