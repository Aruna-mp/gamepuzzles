import React, { useState } from "react";
import {View,Text, ScrollView, Image,TouchableOpacity, FlatList} from 'react-native';
import style from "./style";
import { useNavigation } from "@react-navigation/native";
import color from "../../common/color";
const Animals=()=>{
    const navigation=useNavigation();
    const [value, setValue] = useState('');
  const [storedValues, setStoredValues] = useState([]);
  
    const handlePressA=()=>{
      const NewValue='A';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
      
     

    }
    const handlePressH=()=>{
      const NewValue='H';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
      
   
    }
    const handlePressL=()=>{
      const NewValue='L';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
      
     
    }
    const handlePressE=()=>{
      const NewValue='E';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
      
     
    }
    const handlePressT=()=>{
      const NewValue='T';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
      
   
    }
    const handlePressP=()=>{
      const NewValue='P';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
     
     
    }
    const handlePressEE=()=>{
      const NewValue='E';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
     
      
    }
    const handlePressN=()=>{
      const NewValue='N';
      setValue(NewValue);
      setStoredValues((prevValues) => [...prevValues, NewValue]);
     
    
    }
    const [result, setResult] = useState(['E','L','E','P','H','A','N','T']);
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
      <Text style={style.title}> Animals </Text>
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
                    largest land mammals on earth?</Text>
                </View>
              
        <View style={style.contain}>
      <View style={style.row}>
        <View style={style.box} ><TouchableOpacity onPress={handlePressA}><Text style={style.boxtext}>A</Text></TouchableOpacity></View>
        <View style={style.box} ><TouchableOpacity onPress={handlePressH}><Text style={style.boxtext}>H</Text></TouchableOpacity></View>
        <View style={style.box} ><TouchableOpacity onPress={handlePressL}><Text style={style.boxtext}>L</Text></TouchableOpacity></View>
        <View style={style.box} ><TouchableOpacity onPress={handlePressE}><Text style={style.boxtext}>E</Text></TouchableOpacity></View>
        </View>
      <View style={style.row}>
        <View style={style.box}><TouchableOpacity onPress={handlePressT}><Text style={style.boxtext}>T</Text></TouchableOpacity></View>
        <View style={style.box}><TouchableOpacity onPress={handlePressP}><Text style={style.boxtext}>P</Text></TouchableOpacity></View>
        <View style={style.box}><TouchableOpacity onPress={handlePressEE}><Text style={style.boxtext}>E</Text></TouchableOpacity></View>
        <View style={style.box}><TouchableOpacity onPress={handlePressN}><Text style={style.boxtext}>N</Text></TouchableOpacity></View>
      </View>
    </View>
    <TouchableOpacity  style={style.NextButton}onPress={handlePress}>
      <Text style={style.NextText}>Next</Text>
    </TouchableOpacity>
       
     </View>
        
    );
        
}
export default Animals;

