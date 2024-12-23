import { useAuth } from "@clerk/clerk-expo";
import { Text, View } from "react-native";

import { Button } from "@/components/Button";

import { styles } from "./styles";

export default function Home() {
    const { signOut } = useAuth()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Stone user</Text>
            <Button icon="exit" title="Sair" onPress={() => signOut()} />
        </View>
    )
}