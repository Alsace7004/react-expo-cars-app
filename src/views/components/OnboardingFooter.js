import React from "react";
import { StyleSheet,View,Text,useWindowDimensions, TouchableOpacity } from "react-native";
import slides from "../../../slides";

const OnboardingFooter  = ({currentSlideIndex,next,skip,navigation})=>{
    const {width, height} = useWindowDimensions();
    return (
        <View style={{height:height*0.20,width,justifyContent:'space-between',marginTop:9,paddingHorizontal:20}}>
            {/* slides indicator 92204638*/}
            <View style={{/*borderWidth:2,borderColor:'blue',*/flexDirection:'row',justifyContent:'center'}}>
                {
                    slides.map((_,index)=> <View key={index} style={[styles.indicator,currentSlideIndex == index && {backgroundColor:'red'}]}></View>)
                }
            </View>
            {/* slides buttons */}
            <View style={{marginBottom:20}}>
                {
                    currentSlideIndex == slides.length -1 
                    ?
                    <View style={{height:50}}>
                        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("RegisterScreen")}>
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>GET STARTED</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={{/*borderColor:'violet',borderWidth:2,*/flexDirection:'row'}}>
                        <TouchableOpacity onPress={skip}  style={[styles.btn,{backgroundColor:'transparent',borderColor:'red',borderWidth:2}]}>
                            <Text style={{color:'#f00',fontWeight:'bold',fontSize:16}}>SKIP</Text>
                        </TouchableOpacity>
                            <View style={{width:15}}/>
                        <TouchableOpacity onPress={next} style={styles.btn} > 
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                }
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
       // flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#462636',
        
    },
    indicator:{
        height:15,
        width:15,
        borderRadius:50,
        backgroundColor:"#fff",
        borderColor:'red',
        borderWidth:2,
        marginHorizontal:5,
    },
    btn:{
        flex:1,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red',
        borderRadius:5,
    }
})
export default OnboardingFooter;