import { DimensionValue,Dimensions,StyleSheet } from "react-native";
import color from "../../common/color";
const {width,height}=Dimensions.get('screen');
const style=StyleSheet.create({

    container:{
        height:height*.94,
        backgroundColor:color.green,
       resizeMode:'cover',
       width:width,
      

    },
    scrollview:{
        alignItems:'center',
        marginVertical:height*.3

    },
    text:{
        color: color.black,
        fontSize: 30,
        textAlign: 'center',
        fontFamily:'Poppins-Bold',
       
    },
    NextButton:{
        backgroundColor: color.green,
        padding: 10,
        marginVertical: 5,
        borderRadius: 60,
        marginTop:width*.0003,
        margin:100

      },
      NextText:{color:color.white,
        textAlign:'center',
        fontFamily:'Poppins-SemiBold',
        fontSize:20},
})
export default style;