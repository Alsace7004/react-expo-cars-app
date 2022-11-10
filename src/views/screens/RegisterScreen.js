import React from "react";
import { StyleSheet,View,Text } from "react-native";

const RegisterScreen  = ({navigation})=>{
    return (
        <View style={styles.container}>
            <Text>Hello am the RegisterScreen</Text>
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
export default RegisterScreen;