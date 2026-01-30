import {View, Text, Button} from "react-native";
import {useRouter} from "expo-router";

export default function Login(){

    const router = useRouter();
    return(
        <View>
            <Text>Login</Text>
            <Button title={"Tela Inicial"}
                    onPress={() => router.push("/TodasAsOrdens")}/>
        </View>
    )
}