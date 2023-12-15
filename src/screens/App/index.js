import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home";
import Animals from "../Animals";
import Countries from "../Countries";
import Fruits from "../Fruits";
import Win from "../Win";
import Lose from "../Lose";
const stk=createNativeStackNavigator();
const App=()=>{
    
    return(
        <NavigationContainer>
            <stk.Navigator screenOptions={{headerShown:false}}>
                <stk.Screen name="Home" component={Home}/>
                <stk.Screen name="Animals" component={Animals}/>
                <stk.Screen name="Countries" component={Countries}/>
                <stk.Screen name="Fruits" component={Fruits}/>
                <stk.Screen name="Win" component={Win}/>
                <stk.Screen name="Lose" component={Lose}/>
            
            </stk.Navigator>
        </NavigationContainer>
    );
}
export default App;

