import React from "react";
import { TouchableOpacity, View,Text } from "react-native";
import style from "./style";
import { useNavigation } from "@react-navigation/native";
const Lose=()=>{
    const navigation=useNavigation();
    return(
        <View style={style.container}>
         <View style={style.scrollview}>
                <Text style={style.text}>Sorry.!</Text>
                <Text style={style.text}>You Lose</Text>
                <Text style={style.text}>Try Again</Text>
                
                </View>
     <TouchableOpacity  style={style.NextButton}onPress={() => navigation.navigate('Home')}>
           <Text style={style.NextText}>Retry >>></Text>
    </TouchableOpacity>
        </View>
    );

}
export default Lose;