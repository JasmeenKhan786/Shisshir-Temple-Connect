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
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
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

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = { 
      email: "",
      pwd: "",
    };
  }

  logIn = async (email, password) => {
    var response = await db
      .collection("users")
      .where("email", "==", this.state.email)
      .where("type", "==", "user")
      .get();

    if (response.docs.length != 0) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          alert("Logged In");
          this.props.navigation.replace("Home");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    } else {
      alert("This is the user app! Not an authority");
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <KeyboardAvoidingView style={{ flex: 1 }}>
            <ImageBackground
              source={require("../assets/delaware-hindu-temple.jpg")}
              style={{
                width: "100%",
                height: "100%",
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  marginTop: 100,
                  marginLeft: "10%",
                }}
              >
                Login
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  width: "80%",
                  alignSelf: "center",
                  marginTop: 30,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(20,20,20, 0.5)",
                }}
              >
                <FontAwesome name="at" size={20} color="white" />
                <TextInput
                  style={{
                    width: "90%",
                    paddingLeft: 20,
                    height: 30,
                    color: "white",
                  }}
                  placeholder="Email ID"
                  placeholderTextColor="white"
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
                  marginTop: 30,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(20,20,20, 0.5)",
                }}
              >
                <Feather name="lock" size={20} color="white" />
                <TextInput
                  style={{
                    width: "70%",
                    paddingLeft: 20,
                    height: 30,
                    color: "white",
                  }}
                  placeholder="Password"
                  placeholderTextColor="white"
                  secureTextEntry
                  onChangeText={(val) => {
                    this.setState({ pwd: val });
                  }}
                />
                <Text
                  style={{ color: "orange", fontWeight: "bold" }}
                  onPress={() => {
                    this.props.navigation.replace("ResetPassword");
                  }}
                >
                  Forgot?
                </Text>
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
                  if (this.state.email && this.state.pwd) {
                    this.logIn(this.state.email, this.state.pwd);
                  } else {
                    alert("Please fill all fields");
                  }
                }}
              >
                <Text
                  style={{ color: "white", textAlign: "center", fontSize: 18 }}
                >
                  Login
                </Text>
              </TouchableOpacity>

              <Text
                style={{ textAlign: "center", color: "grey", marginTop: 30 }}
              >
                Or, login with..
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-evenly",
                  marginTop: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    alert("Work in progress!");
                  }}
                  style={{
                    borderWidth: 1,
                    width: "30%",
                    borderRadius: 5,
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://image.similarpng.com/thumbnail/2020/12/Google-logo-design-clipart-PNG.png",
                    }}
                    style={{ width: 30, height: 30 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() => {
                  alert("Work in progress!");
                }}
                  style={{
                    borderWidth: 1,
                    width: "30%",
                    borderRadius: 5,
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png",
                    }}
                    style={{ width: 30, height: 30 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() => {
                  alert("Work in progress!");
                }}
                  style={{
                    borderWidth: 1,
                    width: "30%",
                    borderRadius: 5,
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png",
                    }}
                    style={{ width: 30, height: 30 }}
                  />
                </TouchableOpacity>
              </View>

              <Text
                style={{ textAlign: "center", marginTop: 20 }}
                onPress={() => {
                  this.props.navigation.replace("SignUp");
                }}
              >
                New to Temple Connect?{" "}
                <Text
                  style={{
                    color: "orange",
                    fontWeight: "bold",
                    paddingBottom: 30,
                  }}
                >
                  {" "}
                  Register!{" "}
                </Text>
              </Text>
            </ImageBackground>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
