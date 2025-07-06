import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput,KeyboardAvoidingView, Platform, TouchableWithoutFeedback} from 'react-native';
import {styles} from '@/styles/auth/login_signup'
import SignupButton from '@/components/auth/signupButton';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseconfig';
import { useRouter } from 'expo-router';
export default function SignupScreen(){
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();
    const onSignupPress = async () =>{
        try{
            console.log('made it here')
            const userCredentials =  await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user
            console.log('User Sucessfully created an account');
            router.replace('/auth/login');
        }
        catch (error){
            console.log(error);
        }
    }
    return (
        <LinearGradient
            colors={['rgb(243, 126, 31)','rgb(78, 29, 8)']}
                        style={[styles.linearBackground, {justifyContent:'space-between'}]}
                        start={[0,0.5]}
                        end={[1.5,0.5]}
        >
            <SafeAreaView style={styles.screenContentContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.screenTitle}>Signup</Text>
                </View>    
                <View style={styles.screenContainer}>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inputContainer}>
                        <Text style={styles.inputText}>Email</Text>
                        <TextInput onChangeText={setEmail} placeholder='Enter Your Email' placeholderTextColor='grey' style={styles.userInputBar}/>
                    </KeyboardAvoidingView>
                    <KeyboardAvoidingView keyboardVerticalOffset={40} style={styles.inputContainer}>
                        <Text style={styles.inputText}>Password</Text>
                        <TextInput onChangeText={setPassword} placeholder='Enter Your Password' placeholderTextColor='grey' style={styles.userInputBar}/>
                    </KeyboardAvoidingView>
                    <SignupButton onPress={onSignupPress} isWhite={false}/>
                </View>
            </SafeAreaView>
    
        </LinearGradient>
    )
}