import { Button } from "@react-navigation/elements";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    buttonSizing:{
        width:'90%',
        height:'15%',
        borderRadius:50,
        borderColor:'white',
        borderWidth:2,
        alignSelf:'center',
    },
    buttonContent:{
        flexShrink:1,
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        margin:10,
    },
    buttonText:{
        textAlign:'center',
        color:'white',
        fontSize:25,
        fontWeight:'bold',
    }
})