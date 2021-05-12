import React from 'react';
 import {View , Text , StyleSheet , TouchableOpacity , Dimensions , Image, StatusBar} from 'react-native';

const color1 ='#ff5948'; 
const color2 ='#f8c41c'; 


const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;


class UI1 extends React.Component
 {
    render() {

     return (
           <View style={stil.mainContainer} >
                <StatusBar translucent backgroundColor={'transparent'}     />

               

                <View style = {stil.topContainer}>
                     <Image 
                      source={require('./assets/ibooks15.png')}
                      style = {stil.logo}
                     
                     />
                </View>

 
               <View style = {stil.bottomContainer}>    

                     <View style = {stil. buttonContainer}>

                         <TouchableOpacity style = {[stil.signUpButton , stil.Button]}>
                              <Text style = {stil.signUpButtonText}> SING UP </Text>
                         </TouchableOpacity>

                         <TouchableOpacity style = {[ stil.signInButton  , stil.Button]}>
                              <Text style = {stil.signInButtonText}> SING IN </Text>
                         </TouchableOpacity>

                     </View>
               </View>
           </View>
       );
   }
}

const stil = StyleSheet.create ({

     mainContainer: {
               
               backgroundColor : color1,
               flex :1,
     },

     topContainer: {

          flex : 1,
       justifyContent : 'center',
       alignItems : 'center',
     },

   logo: {
          width  : W* 0.5,
          height : W* 0.5,
     },

     bottomContainer: { }, 
     
     buttonContainer: {
  
          height : H*0.25,
          alignItems : 'center',

     },


     Button : {

          width : W * 0.65,
          height : H*0.05,
          paddingTop : 5,
          paddingBottom : 5,
          justifyContent : 'center',
          alignItems : 'center',
          borderRadius : W * 0.175,
     },

      signUpButton : {  backgroundColor : 'white' , marginBottom : H*0.02 },
      signInButton : { backgroundColor  :  color2 , },
     

      signUpButtonText : {

          fontWeight : 'bold',
          color : 'black',
     },
     
     signInButtonText : {

          fontWeight : 'bold',
          color : 'white',
     },


});





export default UI1;