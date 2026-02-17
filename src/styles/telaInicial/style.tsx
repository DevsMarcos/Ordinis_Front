import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding-top: 20%;
    align-items: center;

`

export const Card = styled.TouchableOpacity`
    width: 90%;
    height: 25%;
    background: #fff;
    border-radius: 25px;
    /* noinspection CssUnknownProperty */
    elevation: 50;
    margin-bottom: 5%;
    padding: 20px;
`

export const OsInformatrionArea = styled.View`
    width: 100%;
    height: 30%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;  
`
interface StatusProps{
    status?: string
}
export const StatusOrdem = styled.View<StatusProps>`
    width: 15%;
    height: 100%;
    border-radius: 250px;
    background: ${props => props.status || '#228b22'};
`

export const OsInformatrion = styled.View`
    width: 100%;
    height: 80%;
`
