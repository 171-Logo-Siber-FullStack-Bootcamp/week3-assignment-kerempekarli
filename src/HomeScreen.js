import { View, StyleSheet,Text, TouchableOpacity, ImageBackground} from "react-native";
import React from 'react';




export default function HomeScreen({navigation}) {
  return (
  
<ImageBackground source={require("./Images/pexels-roberto-nickson-2486168.jpg")} style={styles.image}  resizeMode="cover">
      
      <View style={styles.main}>
      <View style={styles.touchable}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>
         Hello world!
      </Text>
    </TouchableOpacity>
              
    <TouchableOpacity onPress={()=>{navigation.navigate("Shanghai")}} style={styles.button}>
      <Text style={styles.text}>
        Welcome to Hawaii
      </Text>
    </TouchableOpacity>
    </View>
        </View>
     
   </ImageBackground>
  
  )
}

const styles = StyleSheet.create({

    image:{
        height:screen.availHeight,
        resizeMode:"cover",
        justifyContent: "center"
    },
    touchable:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    button:{
      margin:5,
      marginTop:10
    },
    text:{
      fontSize:30,
      color:"#ba007f",
      padding:3,
      backgroundColor:"#0095ff",
      borderRadius:10
    }
 
  })