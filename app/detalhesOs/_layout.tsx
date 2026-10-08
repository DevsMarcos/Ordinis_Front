import { Stack } from "expo-router";

export default function LayoutOs() {
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
          title: "Todas as Ordens",
        }}
      />
    </Stack>
  );
}
