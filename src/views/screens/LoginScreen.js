import React from "react";
import { StyleSheet,View,Text } from "react-native";

const LoginScreen  = ({navigation})=>{
    return (
        <View style={styles.container}>
            <Text>Hello am the LoginScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default LoginScreen;