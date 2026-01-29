import { Text, View, Pressable, Button } from "react-native";
import { Link, useRouter } from 'expo-router';


export default function Index() {

    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <Button
                title="Nova Ordem"
                onPress={() => router.push('/ordem/NovaOrdem')}
            />
        </View>
    );
}
