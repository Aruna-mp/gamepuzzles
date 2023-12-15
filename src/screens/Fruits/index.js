import React, { useState } from "react";
import {View,Text, ScrollView, Image,TouchableOpacity, FlatList} from 'react-native';
import style from "./style";
import { useNavigation } from "@react-navigation/native";
import color from "../../common/color";
const Fruits=()=>{
    const navigation=useNavigation();
    const [value, setValue] = useState('');
  const [storedValues, setStoredValues] = useState([]);
  
    const handlePressI=()=>{
      const NewValue='I';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues,NewValue]);
      
     

    }
    const handlePressII=()=>{
      const NewValue='I';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
      
   
    }
    const handlePressW=()=>{
      const NewValue='W';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
      
     
    }
    const handlePressK=()=>{
      const NewValue='K';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues,NewValue]);
     
      
    }
    
    const [result, setResult] = useState(['K','I','W','I']);
    const areArraysEqual = (storedValues, result) => {
     
      if (storedValues.length !== result.length) {
        return false;
      }
  
     
      for (let i = 0; i < storedValues.length; i++) {
        if (storedValues[i] !== result[i]) {
          return false;
        }
      }
      return true;
    };
    const handlePress=()=>{
      if (areArraysEqual(storedValues, result)) {
      
             navigation.navigate('Win');
      }
      else{
             navigation.navigate('Lose');
      }
    }
    return(
        <View style={style.container}>
            <Image source={require('../../assets/images/bgm.png')} style={style.greenstyle}/>
        <ScrollView style={style.scrollview}>
            <View style={{marginTop:1,}}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require('../../assets/images/arrow.png')} 
        style={{ width: 20, height: 20, marginLeft: 10 }} />
    </TouchableOpacity>
      <Text style={style.title}> Fruits </Text>
           </View>
        </ScrollView>
        {/* { storedValues.map((value, index) => (
        
          <View style={style.rows}>
          <View style={style.wbox}><Text key={index+1} style={style.gettext}>{value}</Text></View>
          </View>
   

    ))} */}
       <FlatList 
       data={storedValues}
       horizontal
       renderItem={({item, index}) => {
        return(
          <View style={style.rows}>
          <View style={style.wbox}><Text key={index} style={style.gettext}>{item}</Text></View>
          </View>
        )
       }}
       />
                <View style={{marginBottom:40}}>
                  <Text style={{color:color.white,textAlign:'center',fontSize:16,
                  fontFamily:'Poppins-Bold'}}>
                    Chinese Gooseberry is another name for?</Text>
                </View>
              
        <View style={style.contain}>
      <View style={style.row}>
        <View style={style.box} ><TouchableOpacity onPress={handlePressK}><Text style={style.boxtext}>K</Text></TouchableOpacity></View>
        <View style={style.box} ><TouchableOpacity onPress={handlePressI}><Text style={style.boxtext}>I</Text></TouchableOpacity></View>
        
        </View>
      <View style={style.row}>
        <View style={style.box}><TouchableOpacity onPress={handlePressII}><Text style={style.boxtext}>I</Text></TouchableOpacity></View>
        <View style={style.box}><TouchableOpacity onPress={handlePressW}><Text style={style.boxtext}>W</Text></TouchableOpacity></View>
        
      </View>
    </View>
    <TouchableOpacity  style={style.NextButton}onPress={handlePress}>
      <Text style={style.NextText}>Next</Text>
    </TouchableOpacity>
       
     </View>
        
    );
        
}
export default Fruits;

