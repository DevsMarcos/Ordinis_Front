import styled from "styled-components/native";

interface ContainerProps {
    centralizacao?: string;

}

export const Container = styled.View<ContainerProps>`
    flex: 1;
    background-color: #f5f5f5; /* Um cinza claro de fundo ajuda o card branco a destacar */
    align-items:  ${props => props.centralizacao};
`;

export const Card = styled.TouchableOpacity`
    width: 92%;
    /* Remova o height: 25% e use um valor fixo ou deixe o padding ditar */
    min-height: 180px;
    background-color: #fff;
    border-radius: 20px;

    /* Elevation 50 é muito alto! O padrão é entre 2 e 8 */
    elevation: 4;

    margin-vertical: 10px;
    align-self: center; /* Centraliza o card sem precisar do align-items no pai */
    padding: 20px;

    /* Sombra para iOS */
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 4px;
`;

export const OsInformatrionArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px; /* Espaçamento entre o topo e os dados */
`;

export const StatusOrdem = styled.View<StatusProps>`
    width: 45px; /* Use valores fixos para o círculo de status */
    height: 45px;
    border-radius: 22.5px;
    background-color: ${props => props.status || '#228b22'};
`;

export const OsInformatrion = styled.View`
    /* Remova height: 80% */
    gap: 4px; /* Espaçamento automático entre as linhas de texto */
`;

// Ajuste no ScrollView
export const StyledScrollView = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 30, // Dá um respiro no final da lista
        paddingTop: '10%',
        alignItems: 'center', // Centraliza tudo horizontalmente
    }
})`
    flex: 1;
    width: 100%;
`;



interface StatusProps{
    status?: string
}
