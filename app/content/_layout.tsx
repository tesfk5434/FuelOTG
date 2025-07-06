import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor:'orange'}}>
        <Tabs.Screen name="home" options={{tabBarIcon:({focused, color, size}) => <Image resizeMode="contain" style={{width:size, height:size}} source={require('@/assets/images/tabs/icons8-home-ios-17-filled/icons8-home-50.png')}/>}}/>
        <Tabs.Screen name="settings" options={ {tabBarIcon:({focused, color, size}) => <Image resizeMode="contain" style={{width:size, height:size}} source={require('@/assets/images/tabs/icons8-settings-ios-17-filled/icons8-settings-50.png')}/>}}/>
    </Tabs>
  );
}
