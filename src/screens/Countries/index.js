import React, { useState } from "react";
import {View,Text, ScrollView, Image,TouchableOpacity, FlatList} from 'react-native';
import style from "./style";
import { useNavigation } from "@react-navigation/native";
import color from "../../common/color";
const Countries=()=>{
    const navigation=useNavigation();
    const [value, setValue] = useState('');
  const [storedValues, setStoredValues] = useState([]);
  
    const handlePressD=()=>{
      const NewValue='D';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
      
     

    }
    const handlePressE=()=>{
      const NewValue='E';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues,NewValue]);
      
   
    }
    const handlePressN=()=>{
      const NewValue='N';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
      
     
    }
    const handlePressM=()=>{
      const NewValue='M';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
      
     
    }
    const handlePressA=()=>{
      const NewValue='A';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
      
   
    }
    const handlePressR=()=>{
      const NewValue='R';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
     
     
    }
    const handlePressK=()=>{
      const NewValue='K';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
     
      
    }
    const [result, setResult] = useState(['D','E','N','M','A','R','K']);
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
      <Text style={style.title}> Countries </Text>
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
                    Cleanest country in the World?</Text>
                </View>
              
        <View style={style.contain}>
      <View style={style.row}>
        <View style={style.box} ><TouchableOpacity onPress={handlePressK}><Text style={style.boxtext}>K</Text></TouchableOpacity></View>
        <View style={style.box} ><TouchableOpacity onPress={handlePressE}><Text style={style.boxtext}>E</Text></TouchableOpacity></View>
        <View style={style.box} ><TouchableOpacity onPress={handlePressD}><Text style={style.boxtext}>D</Text></TouchableOpacity></View>
        <View style={style.box} ><TouchableOpacity onPress={handlePressN}><Text style={style.boxtext}>N</Text></TouchableOpacity></View>
        </View>
      <View style={style.row}>
        <View style={style.box}><TouchableOpacity onPress={handlePressR}><Text style={style.boxtext}>R</Text></TouchableOpacity></View>
        <View style={style.box}><TouchableOpacity onPress={handlePressA}><Text style={style.boxtext}>A</Text></TouchableOpacity></View>
        <View style={style.box}><TouchableOpacity onPress={handlePressM}><Text style={style.boxtext}>M</Text></TouchableOpacity></View>
        
      </View>
    </View>
    <TouchableOpacity  style={style.NextButton}onPress={handlePress}>
      <Text style={style.NextText}>Next</Text>
    </TouchableOpacity>
       
     </View>
        
    );
        
}
export default Countries;

