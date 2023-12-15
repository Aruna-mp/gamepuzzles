import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Trial = () => {
  // Initialize the state with an array containing a default value at the 2nd index
  const [myArray, setMyArray] = useState(['value1', 'defaultValue', 'value3']);

  const handlePress = () => {
    // Update the array with a new value at the 2nd index
    setMyArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[1] = 'newSecondValue';
      return newArray;
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <View style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Press Me</Text>
        </View>
      </TouchableOpacity>

      {/* Display the current array */}
      <Text>{`Array: ${JSON.stringify(myArray)}`}</Text>
    </View>
  );
};

export default Trial;