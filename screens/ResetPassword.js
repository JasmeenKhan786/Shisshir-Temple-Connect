import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import db from "../config";
import firebase from "firebase";
//Components

//JSX - JS and HTML/XML

//props - help you to pass values between components or classes
//states - help you to store values
//json
//this.setState({name:'Jasmeen'})

//Component Lifecycle:
// Mounting Updating Unmounting

//functional components

//Main axis - justifyContent
//Cross axis - alignItems

export default class ResetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{flex:1}}>
        <ImageBackground
              source={require('../assets/delaware-hindu-temple.jpg')}
              style={{
                width: '100%',
                height: '100%',
                flex: 1,    
              }}>
 
          <TouchableOpacity style={{marginTop:'20%', marginLeft:'5%'}}
            onPress={() => {
              this.props.navigation.replace("Login"); 
            }}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginTop: '30%',
              alignSelf: "center",
              color:'black'
            }}
          >
            Reset Password
          </Text>

          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              width: "80%",
              alignSelf: "center",
              marginTop: 40,
              height: 30, 
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="at" size={20} color="black" />
            <TextInput
              style={{ width: "90%", paddingLeft: 20, height: 30 }}
              placeholder="Email ID"
              placeholderTextColor="black"
              onChangeText={(val) => {
                this.setState({ email: val });
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 1,
              backgroundColor: "orange",
              width: "80%",
              alignSelf: "center",
              height: 40,
              marginTop: 30,
              justifyContent: "center", 
              borderColor: "orange",
            }}
            onPress={() => {
              if (this.state.email) {
                firebase
                  .auth()
                  .sendPasswordResetEmail(this.state.email)
                  .then(() => {
                    Alert.alert("Password reset email sent");
                  })
                  .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage);
                  });
              } else {
                alert("Please enter a valid email!");
              }
            }} 
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
              Send Reset Email
            </Text>
          </TouchableOpacity>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
