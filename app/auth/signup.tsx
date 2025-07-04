import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput} from 'react-native';
import {styles} from '@/styles/auth/login_signup'
import SignupButton from '@/components/auth/signupButton';
export default function LoginScreen(){
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
                    <TextInput style={styles.userInputBar}/>
                    <TextInput style={styles.userInputBar}/>
                    <SignupButton isWhite={false}>
                    </SignupButton>
                </View>
            </SafeAreaView>
    
        </LinearGradient>
    )
}