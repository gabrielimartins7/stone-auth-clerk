import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";

import { Button } from "../../components/Button";

import { styles } from "./styles";

WebBrowser.maybeCompleteAuthSession()

export default function SignIn() {
    const [isLoading, setIsLoading] = useState(false);
    const googleAuth = useOAuth({ strategy: "oauth_google"});

    async function onGoogleSignIn() {
        try {
            setIsLoading(true);

            const redirectUrl = Linking.createURL("/")
            const oAuthFlow = await googleAuth.startOAuthFlow({ redirectUrl })

            if(oAuthFlow.authSessionResult?.type === "success"){
                if(oAuthFlow.setActive){
                    await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId })
                }
            }else {
                setIsLoading(false)
            }
        } catch (error) {
            Alert.alert("Algo deu errado, tente mais tarde!");
            setIsLoading(false);
            console.log(error);
        }
    }
    
    useEffect(() => {
        WebBrowser.warmUpAsync()

        return () => {
            WebBrowser.coolDownAsync()
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Stone</Text>
                <Text style={styles.text}>Tudo pra botar o seu negócio pra girar.</Text>
            </View>
            <Button
                icon="logo-google"
                title="Entrar com Google"
                onPress={onGoogleSignIn}
                isLoading={isLoading}
            />
        </View>
    )
}