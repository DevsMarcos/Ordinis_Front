import styled from "styled-components/native";

export const GlobalContainer = styled.View`
    flex: 1;
    background: #f3ebeb;
`

interface TextoProps {

    tamanho?: number; // O '?' indica que é opcional

    cor?: string;

    paddingLeft?: number;

}
export const GenericText = styled.Text<TextoProps>`
    font-family: "Roboto Bold";
    font-size: ${props => props.tamanho || 16};
    color: ${props => props.cor || "#000"};
    font-weight: bold;
    padding-left: ${ props => props.paddingLeft };
`

export const StyledButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
    // Diminui a opacidade para 70% ao tocar
})`
    width: 100%;
    height: 60px; /* Agora ele vai obedecer */
    background-color: #26c8d4;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    
`

export const InputArea = styled.View`
    width: 90%;
    align-items: flex-start;
    margin-bottom: 5%;
    flex-direction: row;
`
export const Input = styled.TextInput`
    width: 100%;
    height: 60px;
    background: #d9d9d9;
    border-radius: 25px;
    padding-left: 10px;
`


