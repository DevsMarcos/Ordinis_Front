import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";

// Cria a ponte do Material Top Tabs com o Expo Router para funcionar o deslize
const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext(Navigator);

export default function TabLayout() {
  return (
    <MaterialTopTabs
      tabBarPosition="bottom" // Joga a barra para o rodapé da tela
      screenOptions={{
        lazy: true, // Melhora a performance carregando as telas sob demanda

        // --- CORES DA TAB BAR (PARTE DE BAIXO) ---
        tabBarActiveTintColor: "rgb(254, 255, 255)",
        tabBarInactiveTintColor: "#8e8e93",

        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#363636",
          borderTopWidth: 0,
          height: 90,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 5, // Sombra para o Android não cortar o arredondado
        },

        // --- OCULTA A LINHA INDICADORA PADRÃO DO MATERIAL ---
        tabBarIndicatorStyle: {
          backgroundColor: "transparent",
        },

        // --- ALINHAMENTO DOS ÍCONES E TEXTOS ---
        tabBarContentContainerStyle: {
          height: "100%",
          paddingTop: 10, // Mantém o seu padding superior
        },
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: "none", // Evita que o Android deixe o texto em CAIXA ALTA
        },

        // --- CONFIGURAÇÕES DE HEADER QUE VOCÊ JÁ TINHA ---
      }}
    >
      <MaterialTopTabs.Screen
        name="TodasAsOrdens"
        options={{
          title: "Todas as Ordens",
          // 👇 Adicionada a tipagem { focused: boolean; color: string } aqui
          tabBarIcon: ({
            focused,
            color,
          }: {
            focused: boolean;
            color: string;
          }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <MaterialTopTabs.Screen
        name="CadastrarOrdem"
        options={{
          title: "Cadastrar Ordem",
          // 👇 Adicionada a tipagem { focused: boolean; color: string } aqui
          tabBarIcon: ({
            focused,
            color,
          }: {
            focused: boolean;
            color: string;
          }) => (
            <MaterialCommunityIcons
              name={focused ? "pencil-box" : "pencil-box-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <MaterialTopTabs.Screen
        name="Configuracoes"
        options={{
          title: "Configurações",
          // 👇 Adicionada a tipagem { focused: boolean; color: string } aqui
          tabBarIcon: ({
            focused,
            color,
          }: {
            focused: boolean;
            color: string;
          }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </MaterialTopTabs>
  );
}
