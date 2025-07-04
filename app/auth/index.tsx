import {Text, View, Image} from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from '@/styles/auth/index'
import { LinearGradient } from 'expo-linear-gradient';
import LoginButton from "@/components/auth/loginButton";
import SignupButton from "@/components/auth/signupButton";
import { useRouter } from "expo-router";
export default function Index(){
    const router = useRouter();
    return(
        <View style={styles.screenBackground}>
            <LinearGradient
            colors={['rgb(243, 126, 31)','rgb(78, 29, 8)']}
            style={styles.linearBackground}
            start={[0,0.5]}
            end={[1.5,0.5]}
            >
                <SafeAreaView style={styles.screenBackground}>
                    <View style={styles.screenContainer}>
                        <Image style={[styles.screenItem]} source={require('@/assets/images/applogo/icons8-gas-station-100.png')}></Image>
                        <Text style={[styles.screenName]}>FuelOTG</Text>
                    </View>
                    <View style={styles.screenContainer}>
                        <Text style={styles.screenTitle}>Welcome</Text>
                        <LoginButton isWhite={false}/>
                        <SignupButton onPress={() => router.push('./auth/signup')} isWhite={true}/>
                    </View>
                    <View>
                        <Text style={styles.screenBottom}>Login with Social's</Text>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </View>
    )
}