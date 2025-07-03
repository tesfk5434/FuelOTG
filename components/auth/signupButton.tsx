import {TouchableOpacity, Text} from "react-native"
import {styles} from '@/styles/auth/authButton'
interface buttonProps{
    transparent?:boolean;
    isWhite:boolean;
    onPress?: (()=>(null));
}
export default function SignupButton({
    transparent=false,
    isWhite,
    onPress=(()=>(null))}:buttonProps
){
    return(
        <TouchableOpacity style={[styles.buttonSizing,{backgroundColor: isWhite? 'rgb(245, 245, 245)':'rgba(255, 255, 255, 0)'}, styles.buttonContent]}>
            <Text style={[styles.buttonText, {color:isWhite? 'black':'white'}]}>Signup</Text>
        </TouchableOpacity>
    )
}