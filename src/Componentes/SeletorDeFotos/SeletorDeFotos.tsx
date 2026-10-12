// src/Componentes/SeletorDeFotos/SeletorDeFotos.tsx
import { StyledButton, TextButton } from "@/src/styles/indexStyle";
import * as ImagePicker from "expo-image-picker";
import {
    Alert,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface Props {
  fotos: string[];
  onChange: (fotos: string[]) => void;
  limite?: number;
}

export default function SeletorDeFotos({ fotos, onChange, limite = 5 }: Props) {
  const limiteAtingido = fotos.length >= limite;

  async function tirarFoto() {
    const permissao = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissao.granted) {
      Alert.alert("Permissão negada", "Ative a câmera nas configurações.");
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      quality: 0.7,
    });

    if (!resultado.canceled) {
      onChange([...fotos, resultado.assets[0].uri]);
    }
  }

  function removerFoto(index: number) {
    onChange(fotos.filter((_, i) => i !== index));
  }

  return (
    <View>
      <StyledButton disabled={limiteAtingido} onPress={tirarFoto}>
        <TextButton>
          {limiteAtingido
            ? `Limite de ${limite} fotos`
            : `Adicionar Fotografia (${fotos.length}/${limite})`}
        </TextButton>
      </StyledButton>

      {fotos.length > 0 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 12 }}
        >
          {fotos.map((uri, index) => (
            <View key={uri} style={{ marginRight: 10 }}>
              <Image
                source={{ uri }}
                style={{ width: 100, height: 100, borderRadius: 12 }}
              />
              <TouchableOpacity
                onPress={() => removerFoto(index)}
                style={{ position: "absolute", top: 4, right: 4 }}
              >
                <Text style={{ color: "#fff" }}>✕</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
