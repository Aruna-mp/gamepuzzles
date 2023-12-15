import React from "react";
import { TouchableOpacity, View,Text } from "react-native";
import style from "./style";
import { useNavigation } from "@react-navigation/native";
const Win=()=>{
    const navigation=useNavigation();
    return(
        <View style={style.container}>
         <View style={style.scrollview}>
                <Text style={style.text}>Correct.!</Text>
                <Text style={style.text}>Congradulations</Text>
                <Text style={style.text}>You earn 10</Text>
                <Text style={style.text}>points</Text>
                </View>
     <TouchableOpacity  style={style.NextButton}onPress={() => navigation.navigate('Home')}>
           <Text style={style.NextText}>Next >>></Text>
    </TouchableOpacity>
        </View>
    );

}
export default Win;