import {TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    isLoading?: boolean;
    icon: keyof typeof Ionicons.glyphMap
}

export function ButtonOut({ isLoading = false, icon, ...rest}: ButtonProps){ 
    return (
        <TouchableOpacity style={styles.container} disabled={isLoading} activeOpacity={0.8} {...rest}>
            {isLoading ? (
            <ActivityIndicator color="white" /> 
            ) : (
              <>
                <Ionicons name={icon} style={styles.icon}/>
               </>  
            )}
        </TouchableOpacity>
    )
}