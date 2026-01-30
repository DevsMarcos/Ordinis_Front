import { Text, View, Pressable, Button } from "react-native";
import { Link, useRouter } from 'expo-router';
export default function Index() {

    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Logo</Text>
            <Button
                title="Login"
                onPress={() => router.push('/Login')}
            />
            <Button title={"Cadastrar-se"}
            onPress={() => router.push("/Registro")}
            />
        </View>
    );
}
