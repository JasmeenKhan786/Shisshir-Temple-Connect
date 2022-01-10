import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import db from '../config';
import DatePicker from 'react-native-datepicker';
//Cross axis - alignItems
import firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';

export default class AddPoojaRequest extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      additionalPersons: '',
      nameGotram: '',
      additionalPersonsGotram: '',
      sevaName: '',
      dateStart: '',
      dateEnd: '',
      price: '',
      anythingElse: '',
    };
  }

  submitForm() {
    db.collection('Pooja Requests')
      .add({
        name: this.state.name,
        nameGotram: this.state.nameGotram,
        additionalPersons: this.state.additionalPersons,
        additionalPersonsGotram: this.state.additionalPersonsGotram,
        sevaName: this.state.sevaName,
        dateStart: this.state.dateStart,
        dateEnd: this.state.dateEnd,
        price: this.state.price,
        anythingElse: this.state.anythingElse,
        senderEmail: firebase.auth().currentUser.email,
        response: '',
        responseStatus: 'pending',
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
    alert('Form Submitted');
    this.props.navigation.navigate('PoojeRequests')
  }
  render() {
    return (
      <LinearGradient
        colors={[ '#f9d976', '#f39f86']}
        //start={{ x: 0.8, y: 0.7 }}
        style={{
          borderRadius: 10,
          padding: 10,
          flex: 1,
        }}>
        <View style={{ flex: 1 }}>
          <ScrollView>
          <KeyboardAvoidingView>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: 'orange',
                width: '40%',
                justifyContent: 'center',
                height: 20,
                marginTop: 10,
                borderColor: 'orange',
              }}
              onPress={() => {
                this.props.navigation.navigate('PoojaRequests');
              }}>
              <Text
                style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>
                Go Back
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 25,
                fontWeight: 'bold',
                paddingTop: 50,
                marginTop: 50,
              }}>
              Pooja Request Form
            </Text>

            <View
              style={{
                borderBottomWidth: 1,
                width: '80%',
                alignSelf: 'center',
                marginTop: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                style={{ width: '70%', textAlign: 'center', height: 30 }}
                placeholder="Name"
                onChangeText={(val) => {
                  this.setState({ name: val });
                }}
              />
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                width: '80%',
                alignSelf: 'center',
                marginTop: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                style={{ width: '70%', textAlign: 'center', height: 30 }}
                placeholder="Additional People's Name"
                onChangeText={(val) => {
                  this.setState({ additionalPersons: val });
                }}
              />
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                width: '80%',
                alignSelf: 'center',
                marginTop: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                style={{ width: '70%', textAlign: 'center', height: 30 }}
                placeholder="Person1 Gotram"
                onChangeText={(val) => {
                  this.setState({ nameGotram: val });
                }}
              />
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                width: '80%',
                alignSelf: 'center',
                marginTop: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                style={{ width: '70%', textAlign: 'center', height: 30 }}
                placeholder="Additional People Gotram"
                onChangeText={(val) => {
                  this.setState({ additionalPersonsGotram: val });
                }}
              />
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                width: '80%',
                alignSelf: 'center',
                marginTop: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                style={{ width: '70%', textAlign: 'center', height: 30 }}
                placeholder="Seva Name"
                onChangeText={(val) => {
                  this.setState({ sevaName: val });
                }}
              />
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                width: '80%',
                alignSelf: 'center',
                marginTop: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <DatePicker
                showIcon={false}
                androidMode="spinner"
                style={{ width: 300 }}
                date={this.state.dateStart}
                mode="date"
                placeholder="DD/MM/YYYY"
                format="DD-MM-YYYY"
                confirmBtnText="Chọn"
                cancelBtnText="Hủy"
                customStyles={{
                  dateInput: {
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: 'black',
                  },
                }}
                onDateChange={(date) => {
                  this.setState({ dateStart: date });
                }}
              />
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                width: '80%',
                alignSelf: 'center',
                marginTop: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <DatePicker
                showIcon={false}
                androidMode="spinner"
                style={{ width: 300 }}
                date={this.state.dateEnd}
                mode="date"
                placeholder="DD/MM/YYYY"
                format="DD-MM-YYYY"
                confirmBtnText="Chọn"
                cancelBtnText="Hủy"
                customStyles={{
                  dateInput: {
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: 'black',
                  },
                }}
                onDateChange={(date) => {
                  this.setState({ dateEnd: date });
                }}
              />
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                width: '80%',
                alignSelf: 'center',
                marginTop: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                style={{ width: '70%', textAlign: 'center', height: 30 }}
                placeholder="Price"
                onChangeText={(val) => {
                  this.setState({ Price: val });
                }}
              />
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                width: '80%',
                alignSelf: 'center',
                marginTop: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                style={{ width: '70%', textAlign: 'center', height: 30 }}
                placeholder="Anything Else?"
                onChangeText={(val) => {
                  this.setState({ anythingElse: val });
                }}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                if(this.state.name && this.state.nameGotram && this.state.sevaName && this.state.dateStart && this.state.dateEnd){
                this.submitForm();
                }else{
                  alert('Please enter required fields!')
                }
              }} 
              style={{
                borderWidth: 1,
                backgroundColor: 'orange',
                marginTop: 50,
                width: '70%',
                height: 70,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 20,
                borderColor:'orange'
              }}>
              <Text
                style={{
                  justifyContent: 'center',
                  fontSize: 35,
                  alignSelf: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}
