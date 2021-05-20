import React from 'react';
 import {View , Text , 
     StyleSheet ,
      TouchableOpacity ,
       Dimensions , Image, 
       StatusBar, 
       TextInput,
       UIManager, 
       LayoutAnimation, 
       Platform, 
       Keyboard
     
     } from 'react-native';

const color1 ='#ff5948'; 
const color2 ='#f8c41c'; 

  
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;


if (
     Platform.OS === "android" &&
     UIManager.setLayoutAnimationEnabledExperimental
   ) {
     UIManager.setLayoutAnimationEnabledExperimental(true);
   }


class UI1 extends React.Component {

     state ={
          page : '' ,
           Klav : false
         
     };
      

     componentDidMount(){
 
      Keyboard.addListener('keyboardDidShow', () => {  this.setState ({ Klav: true });  });
      Keyboard.addListener('keyboardDidHide', () => {  this.setState ({ Klav: false }); });
 
 
      }

     componentDidUpdate(){

          LayoutAnimation.spring();
     }



      
     signUpOnPress = () => {
              
          
          this.setState({page :'signUp'});
     }
     signInOnPress = () => {
              
          this.setState({page :'signIn'});
     }
 





    buttons() {
       return(

          <View style = {
               [stil. buttonContainer,
          
             {
               height : this.state.page !== '' ? 0 : undefined,
             }
          
          
          
          ]}>

          <TouchableOpacity 
               style = {[stil.signUpButton , stil.Button]}
               onPress={this.signUpOnPress}
               >
               <Text style = {stil.signUpButtonText}> SING UP </Text>
          </TouchableOpacity>

          <TouchableOpacity 
               style = {[ stil.signInButton  , stil.Button]}
               onPress={this.signInOnPress}
          >
               <Text style = {stil.signInButtonText}> SING IN </Text>
          </TouchableOpacity>

          </View>
       )
    }

    signUp (){
         return(
              <Text>signUp</Text>
         );
    }

    signIn (){
     return(
            
          <View style = {[
               stil.signInContainer,

               {
                    marginBottom : H *(this.state.Klav ? 0 : 0.2),
                    height : this.state.page !== 'signIn' ? 0 : undefined
               
               }
          
          
          ]}>

              <View style = {stil.InputContainer}>
                  <Text style = {stil.inputCaption}>Kullanıccı </Text>
                  <TextInput
                  style = {stil.input}
                  />
              </View>

              <View style = {stil.InputContainer}>
                  <Text style = {stil.inputCaption}>şifre </Text>
                  <TextInput
                  style = {stil.input}
                  />
              </View>
               
               <TouchableOpacity style = {stil.passwordForgotButton}>
                    <Text style = {[stil.inputCaption , stil.passwordForgot]}>şifreni mi unuttun</Text>
               </TouchableOpacity>


               <TouchableOpacity style = { [stil.Button,stil.LoginButton , this.state.Klav && stil.LoginButtonKeyboard]}>
                    <Text style = {stil.LoginButtonText}> Oturum aç  </Text>
               </TouchableOpacity>
               {
                    !this.state.Klav &&
                <>
                    <TouchableOpacity style = { stil.Button}>
                         <Text style = {stil.veyaText}> Ve Ya   </Text>
                    </TouchableOpacity>
     
                    <View style = {stil.longinButtonContainer}>

                         <TouchableOpacity style = { [stil.Button,stil.socialButton]}>
                              <Text style = {stil.socialButtonText}>  Facebook  </Text>
                         </TouchableOpacity>

                         <TouchableOpacity style = { [stil.Button,stil.socialButton]}>
                              <Text style = {stil.socialButtonText}> Google  </Text>
                         </TouchableOpacity>
                         
                    </View>
                </>
               }
 
          </View>



     );
}
    
    
    render() {

      return (
             <View style={stil.mainContainer} >
                  <StatusBar translucent backgroundColor={'transparent'}  />

                <View style = {stil.topContainer}>

                     <TouchableOpacity 
                          onPress={() => this.setState({ page:'' })}  
                         disabled={this.state.page === ''} // or activeOpacity={this.state.page === '' ? 1 : undefined}     
                    >
                    <Image 
                      source={require('./assets/ibooks15.png')}
                      style = {[
                           {
                            
                             
                              width : this.state.Klav    ? W * 0.2 : W * 0.5,
                              height: this.state.Klav    ? W * 0.2 : W * 0.5,
                              marginLeft: this.state.Klav ? W * 0.5  : null ,
                              alignSelf: this.state.Klav  ? 'flex-start': null

                          }
                    
                      ]}
                     
                    />

                     </TouchableOpacity>
                    
                </View>

                <View style = {stil.bottomContainer}>   
               { /*
                  {this.state.page === ''       && this.buttons()}
                  {this.state.page === 'signUp' && this.signUp() }
                  {this.state.page === 'signIn' && this.signIn() }
               */}
                    {this.buttons()}
                    {this.signIn() }
                    {/*this.signUp()*/ }

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

  

     bottomContainer: { }, 
     
     buttonContainer: {
  
          height : H*0.25,
          alignItems : 'center',
          overflow : 'hidden',

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


     signInContainer : {
                overflow : 'hidden',              
               alignItems : 'center',
            
     },
     InputContainer : {
        
     },
     
     input : {
          width  : W * 0.8,
          borderBottomWidth : 1.5,
          borderBottomColor : 'white',
          fontWeight: 'bold',
          color : 'white' ,
          
          paddingTop :0,
     },
     
     inputCaption : {
          color : color2 ,
          fontWeight: 'bold',
     },

     passwordForgotButton : {
           marginTop : 10 ,
           marginRight : W * 0.1,
           alignSelf : 'flex-end',
     },

     passwordForgot : {
         
          fontSize : 12,


     },


    
     LoginButton : {

               backgroundColor : color2,
               marginTop : 15,

     },

     LoginButtonKeyboard : {
       borderRadius : 0,
       width : W

     },


     LoginButtonText : {
         color : 'white',
         fontWeight: 'bold',
         fontSize :16,
         
     },
     veyaText : {
       fontSize : 12,
       color : 'white',
       fontWeight: 'bold',
 
     },

     socialButton : {
      backgroundColor : 'white', 
      width : W * 0.3,

     },
     longinButtonContainer : {
          flexDirection : 'row',
          justifyContent : 'space-evenly',
          width  : W 

     
     

     },
     socialButtonText : {


          color : 'black',
          fontWeight: 'bold',
          fontSize : 16,
     }



});





export default UI1;


