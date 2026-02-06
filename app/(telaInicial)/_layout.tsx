import { Stack, Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>

            <Tabs.Screen
                name="TodasAsOrdens"
                options={{
                    title: 'Todas as Ordens',
                    headerTitleAlign: 'center',
            }}
            />

            {/* Aqui você "batiza" cada arquivo com um nome amigável */}
            <Tabs.Screen
                name="CadastrarOrdem"
                options={{ title: 'Cadastrar Ordem' }}
            />

        </Tabs>
    );
}