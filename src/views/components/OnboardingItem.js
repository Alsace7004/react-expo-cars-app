import React from "react";
import { StyleSheet,View,Text,useWindowDimensions,Image } from "react-native";

const OnboardingItem  = ({item})=>{
    const {width} = useWindowDimensions();
    return (
        <View style={[styles.container,{width/*,borderColor:'red',borderWidth:2*/}]}>
            <Image source={item.image} style={[styles.image,{width,resizeMode:'contain'}]} />
            <View style={{flex:0.3/*,borderColor:'green',borderWidth:2*/}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    image:{
        flex:0.7,
        justifyContent:'center'
    },
    title:{
        fontSize:24,
        fontWeight:'900',
        textTransform:'uppercase',
        textAlign:'center'
    },
    description:{
        textAlign:'center',
        fontWeight:'300',
        paddingHorizontal:25,
        color:'grey'
    }
})
export default OnboardingItem;