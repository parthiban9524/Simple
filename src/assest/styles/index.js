import { StyleSheet } from "react-native";
import { normalize } from "../../components/utils";

const styles = StyleSheet.create({

    input: {
        backgroundColor: "#395173", 
        height: normalize(40), 
        width: normalize(175), 
        justifyContent: "center",
        alignSelf : "center",
        fontSize : normalize(18),
        paddingLeft : normalize(15)
    }

});

export default styles;