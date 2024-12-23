import { useAuth, useUser } from "@clerk/clerk-expo";
import { Text, View } from "react-native";

import { ButtonOut } from "@/components/ButtonOut";

import { styles } from "./styles";

export default function Home() {
    const { user } = useUser();
    const { signOut } = useAuth();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Produtos Stone</Text>
                <ButtonOut icon="exit" onPress={() => signOut()} />
            </View>
        </View>
    )
}