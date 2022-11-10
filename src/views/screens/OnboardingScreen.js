import React,{useState,useRef} from "react";
import { StyleSheet,View,Text,FlatList, useWindowDimensions } from "react-native";
import slides from "../../../slides";
import OnboardingItem from "../components/OnboardingItem";
import OnboardingFooter from "../components/OnboardingFooter";
const OnboardingScreen  = ({navigation})=>{
    const {width} = useWindowDimensions();
    const [currentSlideIndex,setCurrentSlideIndex]= useState(0);
    const ref = useRef(null);
    const next = ()=>{
        const nextSlideIndex = currentSlideIndex + 1;
        if(nextSlideIndex != slides.length){
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({offset});
            setCurrentSlideIndex(nextSlideIndex);
        }
    }
    const skip = ()=>{
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlideIndex);
    }
    const updateCuurentSlideIndex = (e)=>{
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        //console.log("valeur de contentOffsetX:",contentOffsetX);
        const currentIndex = Math.round(contentOffsetX/width);
        //console.log("valeur de currentIndex:",currentIndex);
        setCurrentSlideIndex(currentIndex);
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={slides}
                renderItem = {({item})=> <OnboardingItem item={item}/>}
                keyExtractor = {(item)=>item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={updateCuurentSlideIndex}
                ref={ref}
                
            />
            <OnboardingFooter navigation={navigation} next={next} skip={skip} currentSlideIndex={currentSlideIndex}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    }
})
export default OnboardingScreen;