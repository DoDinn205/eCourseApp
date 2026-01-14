import { StyleSheet } from "react-native";
import { avatar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    margin: {
        margin: 5
    },
    padding: {
        padding: 5
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50
    }
})