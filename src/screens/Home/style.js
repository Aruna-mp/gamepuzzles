import { DimensionValue,Dimensions,StyleSheet } from "react-native";
import color from "../../common/color";
const {width,height}=Dimensions.get('screen');
const style=StyleSheet.create({

    container:{
        height:height*.94,
        backgroundColor:color.black,
       resizeMode:'cover',
       width:width,

    },
    greenstyle:{
        height:height*.1,
        width:width,
        resizeMode:'cover'
    },
    scrollview:{
        flex:1,
        padding:width*.05,
        backgroundColor:color.black,
        borderTopLeftRadius:width*.04,
        borderTopRightRadius:width*.04,
        overflow:'hidden',
        marginTop:width*.04,
    },
    title:{
        height:70,
        width:300,
        alignItems:'center',
        borderTopLeftRadius:.4,
        resizeMode:'cover',
        
    },
    button:{
        backgroundColor:color.green,
        borderRadius:30,
        padding:width*.04,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:width*.025,
        margin:30,
        marginTop:40

    },
    
    utton: {
        backgroundColor: color.green,
        padding: 15,
        marginVertical: 8,
        borderRadius: 40,
        marginTop:40,
      },
      selectedButton: {
        backgroundColor:color.lightblue,
      },
      buttonText: {
        color: color.white,
        fontSize: 16,
        textAlign: 'center',
        fontFamily:'Poppins-Bold'
      },
      selectedText: {
        marginTop: 40,
        fontSize: 18,
        fontWeight: 'bold',
      },
      startbutton:{
        backgroundColor: color.gold,
        padding: 15,
        marginVertical: 8,
        borderRadius: 40,
        marginTop:100

      },
      textstart:{
        color: color.white,
        fontSize: 16,
        textAlign: 'center',
        fontFamily:'Poppins-Bold'

      },

});
export default style;