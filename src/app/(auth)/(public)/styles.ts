import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        
    },
    header: {
        gap: 12,
        paddingVertical: 50,
        paddingHorizontal: 18,
        marginBottom: 20,
        backgroundColor: "#268C5C",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 14,
        color: "#FFFFFF"
    },
    containerScroll: {
        backgroundColor: "#ffff",
        padding: 14
    },
    products: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "semibold"
    },
    carousel: {
        height: "50%"
    }
})