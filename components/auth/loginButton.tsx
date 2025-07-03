import {TouchableOpacity, Text} from "react-native"
import {styles} from '@/styles/auth/authButton'
interface buttonProps{
    transparent?:boolean;
    isWhite:boolean;
    onPress?: (()=>(null));
}
export default function LoginButton({
    transparent=false,
    isWhite,
    onPress=(()=>(null))}:buttonProps
){
    return(
        <TouchableOpacity style={[styles.buttonSizing,{backgroundColor:'rgba(255, 255, 255, 0)'}, styles.buttonContent]}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    )
}