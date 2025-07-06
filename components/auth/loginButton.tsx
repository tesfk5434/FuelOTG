import {TouchableOpacity, Text} from "react-native"
import {styles} from '@/styles/auth/authButton'
import { LinearGradient } from "expo-linear-gradient";
interface buttonProps{
    transparent?:boolean;
    isWhite:boolean;
    onPress?: (()=>void);
}
export default function LoginButton({
    transparent=false,
    isWhite,
    onPress=(()=>{})}:buttonProps
){
    return(
        <TouchableOpacity onPress={onPress} style={[styles.buttonSizing,{backgroundColor:'rgba(255, 255, 255, 0)'}, styles.buttonContent]}>
            <LinearGradient
            style={[styles.linearBackground, {flex:1,flexDirection:'column', justifyContent:'center',alignContent:'center'}]}
            colors={!isWhite ? ['rgb(243, 126, 31)','rgb(78, 29, 8)'] : ['white', 'white']}
            start={[0,0.5]}
            end={[1.5,0.5]}
            >
                <Text style={[styles.buttonText, {color:isWhite? 'black':'white'}]}>Login</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}