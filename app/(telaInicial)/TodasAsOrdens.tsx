import OrdemDeServico from "@/src/Componentes/OS/OrdemDeServico";
import useFetchOrderList from "@/src/Hooks/useFetchOrderList";
import { GlobalContainer, Input, InputArea } from "@/src/styles/globalStyle";
import { Container } from "@/src/styles/telaInicial/style";
import { Image } from "expo-image";
import { ActivityIndicator, FlatList } from "react-native";

export default function TodasAsOrdens() {
  const { ordem, loading, fetchOrdens } = useFetchOrderList();

  return (
    <GlobalContainer>
      <Container centralizacao="center">
        <InputArea>
          <Image source={"../../"} />
          <Input placeholder={"Pesquise o ID da OS ou o Nome do Cliente"} />
        </InputArea>

        <FlatList
          data={ordem}
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={
            loading ? (
              <ActivityIndicator color="#a78bfa" style={{ margin: 20 }} />
            ) : null
          }
          renderItem={({ item }) => <OrdemDeServico ordem={item} />}
        />
      </Container>
    </GlobalContainer>
  );
}
