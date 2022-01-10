import * as React from 'react';
import {
  View,

} from 'react-native';
import firebase from 'firebase';

//Cross axis - alignItems

export default class Loading extends React.Component {


  checkIfLoggedIn(){
    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        this.props.navigation.replace('Home')
      } else {
        this.props.navigation.replace("Login")
      }
    })
  }

  componentDidMount(){
    this.checkIfLoggedIn()
  }


  render(){
    return(
      <View>
      </View>
    );
  }

  


}

