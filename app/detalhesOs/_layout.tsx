import { Stack, useLocalSearchParams } from "expo-router";

export default function LayoutOs() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        // Isso remove o nome feio e estiliza o cabeçalho para todas as telas do grupo
        headerStyle: { backgroundColor: "#1f1f1f" },
        headerTintColor: "#ffffff",
      }}
    >
      <Stack.Screen
        name="[id]"
        options={{
          title: `OS #${id}`,
        }}
      />
    </Stack>
  );
}
