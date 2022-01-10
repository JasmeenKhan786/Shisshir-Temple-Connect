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

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pwd: "",
      name: "",
      city: "",
      confirmPwd: "",
    };
  }

  signUp = (emailId, password, name) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then((userCredential) => {
        Alert.alert("Logged In");
        db.collection("users").add({
          email: emailId,
          name: name,
          city: this.state.city,
          type: "user",
        });
        this.props.navigation.replace('Home')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };
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
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginTop: '30%',
              marginLeft: "10%",
            }}
          >
            Sign up
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
              backgroundColor: "rgba(20,20,20, 0.5)",
            }}
          >
            <FontAwesome name="at" size={20} color="white" />
            <TextInput
              style={{ width: "90%", paddingLeft: 20, height: 30 }}
              placeholder="Email ID"
              placeholderTextColor={"white"}
              onChangeText={(val) => {
                this.setState({ email: val });
              }}
            />
          </View>

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
              backgroundColor: "rgba(20,20,20, 0.5)",
            }}
          >
            <Feather name="lock" size={20} color="white" />
            <TextInput
              style={{ width: "90%", paddingLeft: 20, height: 30 }}
              placeholder="Password"
              placeholderTextColor={"white"}

              secureTextEntry
              onChangeText={(val) => {
                this.setState({ pwd: val });
              }}
            />
          </View>

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
              backgroundColor: "rgba(20,20,20, 0.5)",
            }}
          >
            <Ionicons name="person-outline" size={20} color="white" />
            <TextInput
              style={{ width: "90%", paddingLeft: 20, height: 30 }}
              placeholder="Confirm Password"
              placeholderTextColor={"white"}

              onChangeText={(val) => {
                this.setState({ confirmPwd: val });
              }}
            />
          </View>

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
              backgroundColor: "rgba(20,20,20, 0.5)",
            }}
          >
            <Ionicons name="person-outline" size={20} color="white" />
            <TextInput
              style={{ width: "90%", paddingLeft: 20, height: 30 }}
              placeholder="Full Name"
              placeholderTextColor={"white"}

              onChangeText={(val) => {
                this.setState({ name: val });
              }}
            />
          </View>

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
              backgroundColor: "rgba(20,20,20, 0.5)",
            }}
          >
            <Ionicons name="person-outline" size={20} color="white" />
            <TextInput
              style={{ width: "90%", paddingLeft: 20, height: 30 }}
              placeholder="City"
              placeholderTextColor={"white"}

              onChangeText={(val) => {
                this.setState({ city: val });
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
              if (
                this.state.email &&
                this.state.pwd &&
                this.state.confirmPwd &&
                this.state.name &&
                this.state.city
              ) {
                if(this.state.pwd === this.state.confirmPwd){
                  this.signUp(this.state.email, this.state.pwd, this.state.name);

                }
                else{
                  alert("Passwords don't match!")
                }
              } else {
                alert("Please fill all the details!");
              }
            }}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <Text
            style={{ textAlign: "center", marginTop: 20 }}
            onPress={() => {
              this.props.navigation.replace("Login");
            }}
          >
            Already have an account?{" "}
            <Text
              style={{
                color: "orange",
                fontWeight: "bold",
                paddingBottom: 30,
              }}
            >
              {" "}
              Login!{" "}
            </Text>
          </Text>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
