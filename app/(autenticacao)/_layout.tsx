import { Stack } from "expo-router";

export default function LayoutAutenticacao() {
  return (
    <Stack
      screenOptions={{
        // Isso remove o nome feio e estiliza o cabeçalho para todas as telas do grupo
        headerStyle: { backgroundColor: "#150039" },
        headerTintColor: "#ffffff",
      }}
    >
      {/* Aqui você "batiza" cada arquivo com um nome amigável */}
      <Stack.Screen name="Login" options={{ title: "Login" }} />
      <Stack.Screen name="Registro" options={{ title: "Crie sua conta" }} />
    </Stack>
  );
}
