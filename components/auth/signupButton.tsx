import {TouchableOpacity, Text} from "react-native"
import {styles} from '@/styles/auth/authButton'
interface buttonProps{
    transparent?:boolean;
    isWhite:boolean;
    onPress?: (()=>(void));
}
export default function SignupButton({
    transparent=false,
    isWhite,
    onPress=(()=>{})}:buttonProps
){
    return(
        <TouchableOpacity onPress={onPress} style={[styles.buttonSizing,{backgroundColor: isWhite? 'rgb(245, 245, 245)':'rgba(255, 255, 255, 0)'}, styles.buttonContent]}>
            <Text style={[styles.buttonText, {color:isWhite? 'black':'white'}]}>Signup</Text>
        </TouchableOpacity>
    )
}