import { Text, Image} from "react-native";
import { Redirect } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from "@/styles/loading"
import {auth} from '../firebaseconfig'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(false);
  useEffect (()=>{
    const subscribe = onAuthStateChanged(auth, (user) =>{
      setUser( user != null);
      setIsLoading(false);
    })
    return subscribe;
  }, [])
  if (!isLoading) {return <Redirect href={user? '/content/home' : '/auth'}/>}
  return (
    <SafeAreaView style={styles.screenBackground}>
      <Image style={[styles.screenItem]} source={require('@/assets/images/applogo/icons8-gas-station-100.png')}></Image>
      <Text style={[styles.screenItem, styles.screenTitle]}>OTGFuel</Text>
    </SafeAreaView>
  );
}
