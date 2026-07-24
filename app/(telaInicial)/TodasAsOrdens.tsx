import OrdemDeServico from "@/src/Componentes/OS/OrdemDeServico";
import useFetchOrderList from "@/src/Hooks/useFetchOrderList";
import {
  CardsArea,
  GlobalContainer,
  Input,
  InputArea,
} from "@/src/styles/globalStyle";
import { Container } from "@/src/styles/telaInicial/style";
import { Image } from "expo-image";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
} from "react-native";

export default function TodasAsOrdens() {
  const { ordem, loading, fetchOrdens, refreshing } = useFetchOrderList();

  return (
    <GlobalContainer>
      <Container centralizacao="center">
        <InputArea>
          <Image source={"../../"} />
          <Input placeholder={"Pesquise o ID da OS ou o Nome do Cliente"} />
        </InputArea>

        <CardsArea>
          <FlatList
            data={ordem}
            keyExtractor={(item) => String(item.id)}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => fetchOrdens(true)}
                colors={["#a78bfa"]} // Android: cor do spinner
                tintColor="#a78bfa" // iOS: cor do spinner
              />
            }
            ListEmptyComponent={
              loading ? (
                <ActivityIndicator color="#a78bfa" style={{ margin: 20 }} />
              ) : (
                <Text style={{ textAlign: "center", margin: 20 }}>
                  Nenhuma ordem encontrada
                </Text>
              )
            }
            renderItem={({ item }) => <OrdemDeServico ordem={item} />}
          />
        </CardsArea>
      </Container>
    </GlobalContainer>
  );
}
