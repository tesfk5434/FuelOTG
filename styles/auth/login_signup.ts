import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        screenContentContainer:{
            flex:1,
            flexDirection:'column',
            justifyContent:'flex-start',
            alignContent:'center',
            width:'100%',
        },
        titleContainer:{
            flexShrink:1,
            justifyContent:'center',
            flexDirection:'column',
            alignContent:'center',
            height:'30%',
        },
        screenContainer:{
            flexShrink:1,
            flexDirection:'column',
            backgroundColor:'rgb(245, 245, 245)',
            borderRadius:20,
            justifyContent:'space-evenly',
            alignContent:'center',
            height:'50%',
        },
        screenItem:{
            alignSelf:'center',
            margin:20,
        },
        linearBackground:{
            alignItems:'center',
            flex:1,
            flexDirection:'column',
        },
        screenTitle:{
            color:'white',
            fontWeight:'bold',
            fontSize:50,
            textAlign:'center',
            marginBottom:30,
        },
        userInputBar:{
            width:'100%',
            height:50,
            padding:10,
            borderColor:'rgba(0, 0, 0, 0.1))',
            borderWidth:1,
            borderRadius:40,
            alignSelf:'center',
            backgroundColor:'rgba(200, 200, 200, 0.23)',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
        },
        inputContainer:{
            flexShrink:1,
            flexDirection:'column',
            justifyContent:'flex-start',
            width:'80%',
            alignSelf:'center',
        },
        inputText:{
            textAlign:'left',
            paddingLeft:10,
            marginBottom:10,
            color: 'orange',
            fontWeight:'bold',
            fontSize:20,
        },
    }
) 