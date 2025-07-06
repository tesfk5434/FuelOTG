import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput} from 'react-native';
import {styles} from '@/styles/auth/login_signup'
import LoginButton from '@/components/auth/loginButton';
import { useState } from 'react';
import { auth } from '@/firebaseconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';
export default function LoginScreen(){
    const [password, setPassword] = useState('');
    const [email, setEmail] =  useState('');
    const router = useRouter();
    const onLoginPress = async () =>{
        try{
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            console.log('Succussfully signed in'); 
            router.replace('/content/home');
        }
        catch (error){
            console.warn(error);
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
                    <Text style={styles.screenTitle}>Login</Text>
                </View>    
                <View style={styles.screenContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Email</Text>
                        <TextInput onChangeText={setEmail} placeholder='Enter Your Email' placeholderTextColor='grey' style={styles.userInputBar}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Password</Text>
                        <TextInput onChangeText={setPassword} placeholder='Create Your Password' placeholderTextColor='grey' style={styles.userInputBar}/>
                    </View>
                    <LoginButton onPress={onLoginPress} isWhite={false}/>
                </View>
            </SafeAreaView>
    
        </LinearGradient>
    )
}