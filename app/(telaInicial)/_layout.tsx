import { Stack, Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                // --- CORES DA TAB BAR (PARTE DE BAIXO) ---
                tabBarActiveTintColor: '#00c3e3',
                tabBarInactiveTintColor: '#8e8e93',
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                    borderTopWidth: 0,

                },

                // --- CORES DO HEADER (PARTE DE CIMA) ---
                headerShown: false,
                headerTintColor: '#ffffff', // Cor do texto e ícones (setas/botões) do cabeçalho
                headerTitleStyle: {
                    fontWeight: 'bold', // Opcional: Deixa o título em negrito
                },
            }}
        >

            <Tabs.Screen
                name="TodasAsOrdens"
                options={{
                    title: 'Todas as Ordens',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({focused, color}) => (
                        <Ionicons name={focused ? "home" : "home-outline"}
                                  size={24}
                                  color = {color} />                    )
            }}
            />

            {/* Aqui você "batiza" cada arquivo com um nome amigável */}
            <Tabs.Screen
                name="CadastrarOrdem"
                options={{ title: 'Cadastrar Ordem', tabBarIcon: ({focused, color}) => (
                        <MaterialCommunityIcons name={focused ? "pencil-box" : "pencil-box-outline"} size={24} color={color} />
                    ) }}
            />

            <Tabs.Screen
                name="Configuracoes"
                options={{ title: 'Configuracoes', tabBarIcon: ({focused, color}) => (
                        <Ionicons name={focused ? "person" : "person-outline"}
                                  size={24}
                                  color = {color} />
                    ) }}
            />

        </Tabs>
    );
}