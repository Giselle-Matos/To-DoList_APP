import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: "4%",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#DAFAFA"
    },
    titleView: {
        width: "100%",
        height: "12%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#AA6BF3",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    title: {
        fontSize: 28,
    },
    inputView: {
        marginTop: 20,
        width: "100%",
        height: "30%",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: "30%",
        backgroundColor: "#D8CEF6",
        width: "80%",
        borderRadius: 20,
        padding: 15,
    },
    button: {
        height: "20%",
        backgroundColor:"#AA6BF3",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginTop: 15,
        width: "40%",
    },
    textView: {
        width: "80%",
        height: "5%",
    },
    text: {
        fontSize: 18,
    },
    listView: {
        width: "80%",
        height: "48%",
        backgroundColor: "#D8CEF6",
        borderWidth: 1,
        borderRadius: 20,
    },
    listItem: {
        height: 50,
        justifyContent: "space-around",
        padding: 10,
        flexDirection: "row",

    }
});
