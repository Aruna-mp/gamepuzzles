import React, { useState } from "react";
import {View,Text, ScrollView, Image, TouchableOpacity, Button} from 'react-native';
import style from "./style";
import { useNavigation } from "@react-navigation/native";
const Home=()=>{
    const [selectedButton, setSelectedButton] = useState(null);
    const navigation=useNavigation();
    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };
  
    const handleStartPress = () => {
        if (selectedButton==='Animal') {
         navigation.navigate('Animals');}
        else if (selectedButton==='Countries') {
            navigation.navigate('Countries');}
         else if (selectedButton==='Fruits') {
                navigation.navigate('Fruits');}
         }
    
    return(
        <View style={style.container}>
            <Image source={require('../../assets/images/bgm.png')} style={style.greenstyle}/>
        <ScrollView style={style.scrollview}>
        <Image source={require('../../assets/images/word.jpg')} style={style.title}/>

        <TouchableOpacity
        style={[style.utton, selectedButton === 'Animal' && style.selectedButton]}
        onPress={() => handleButtonPress('Animal')}
      >
        <Text style={style.buttonText}>Animal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[style.utton, selectedButton === 'Countries' && style.selectedButton]}
        onPress={() => handleButtonPress('Countries')}
      >
        <Text style={style.buttonText}>Countries</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[style.utton, selectedButton === 'Fruits' && style.selectedButton]}
        onPress={() => handleButtonPress('Fruits')}
      >
        <Text style={style.buttonText}>Fruits</Text>
      </TouchableOpacity>
      
      {/* <Button title="Start" onPress={handleStartPress} /> */}
      <TouchableOpacity onPress={handleStartPress} style={style.startbutton}>
        <Text style={style.textstart}>START</Text>
      </TouchableOpacity>

{/* Display the selected button */}
{selectedButton && (
  <Text style={style.selectedText}>Selected: {selectedButton}</Text>
)}












         {/* <TouchableOpacity onPress={onPressAnimal} 
         style={{backgroundColor: animal ? color.green : color.lightblue ,borderRadius:30,
            padding:10,
            justifyContent:'center',
            alignItems:'center',
            marginVertical:30,
            margin:30,
            marginTop:40 }}>
            <Text style={style.buttonfont}>Animals</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressCountry}  id="countries"
         style={{backgroundColor:country ? color.green : color.lightblue ,borderRadius:30,
            padding:10,
            justifyContent:'center',
            alignItems:'center',
            marginVertical:30,
            margin:30,
            marginTop:40 }}>
            <Text style={style.buttonfont}>Countries</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressFruits}  id="Fruits"
         style={{backgroundColor: fruits ? color.green : color.lightblue ,borderRadius:30,
            padding:10,
            justifyContent:'center',
            alignItems:'center',
            marginVertical:30,
            margin:30,
            marginTop:40 }}>
            <Text style={style.buttonfont}>Fruits</Text>
            </TouchableOpacity>
           
{/*            
           <TouchableOpacity onPress={handleCountries} style={style.button}>
            <Text style={style.buttonfont}>Countries</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFruits} style={style.button}>
            <Text style={style.buttonfont}>Fruits</Text>
         </TouchableOpacity>*/}
            {/* <TouchableOpacity onPress={handleGoStart} 
            style={style.startbutton}>
            <Text style={style.buttonfontstart}>START</Text>
            </TouchableOpacity>  
              */}
    
        </ScrollView>
        </View>
    );

}
export default Home;