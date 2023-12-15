
import { Dimensions,StyleSheet } from "react-native";
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
        textAlign:'center',
        resizeMode:'cover',
        fontSize:60,
        color:color.green,
        fontFamily:'Poppins-Bold',   
    },
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      row: {
        
        flexDirection: 'row',
        marginBottom: width*.07,
      },
      box: {
        width: width*.14,
        height: width*.14,
        backgroundColor:color.green, 
        margin: 5,
       
        
        
      
      },
      boxtext:{
        alignItems:'center',
        color:color.white,
        fontFamily:'Poppins-Bold',
        fontSize:16,
        textAlign:'center',
        padding:11,

      },
      rows: {
        
        flexDirection: 'row',
        marginBottom: 30,
        
      },
      wbox: {
        width: width*.10,
        height: width*.10,
        backgroundColor:color.white, 
         margin: 5,
        borderColor:color.green,
        borderWidth:2,
        flexDirection:'row',
      },
      NextButton:{
        backgroundColor: color.green,
        padding: 10,
        marginVertical: 5,
        borderRadius: 60,
        marginTop:30,
        margin:100

      },
      NextText:{color:color.white,
        textAlign:'center',
        fontFamily:'Poppins-SemiBold',
        fontSize:20},
     gettext:{
          fontFamily:'Poppins-Bold',
          fontSize:16,
          color:color.black,
          marginTop:10,
          padding:1,
          flexDirection:'row'

        },
    

})
export default style;