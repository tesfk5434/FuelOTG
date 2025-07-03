import { Text, Image} from "react-native";
import { Redirect } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from "@/styles/loading"
import {auth} from '../firebaseconfig'
export default function Index() {
  const user = auth.currentUser;
  return (
    <SafeAreaView style={styles.screenBackground}>
      <Image style={[styles.screenItem]} source={require('@/assets/images/applogo/icons8-gas-station-100.png')}></Image>
      <Text style={[styles.screenItem, styles.screenTitle]}>OTGFuel</Text>
      <Redirect href='./auth'></Redirect>
    </SafeAreaView>
  );
}
