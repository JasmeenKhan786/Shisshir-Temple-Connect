import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import db from '../config';
//Cross axis - alignItems
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase';
import { Entypo } from '@expo/vector-icons';
 
export default class PoojaRequest extends React.Component {
  getData = async () => {
    this.setState({requests:[]})
    var response = await db
      .collection('Pooja Requests')
      .where('senderEmail', '==', firebase.auth().currentUser.email)
      .get();
    response.docs.map((a) => {
      var temp = this.state.requests;
      var data = a.data();
      data.id = a.id;
      temp.push(data);
      this.setState({ requests: temp });
    });
  };

  constructor() {
    super();
    this.state = {
      requests: [],
    };
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <LinearGradient colors={['#f9d976', '#f39f86']} style={{ flex: 1 }}>
        <View style={{}}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              paddingTop: 50,
              fontSize: 35,
            }}
            onPress={() => {
              this.props.navigation.openDrawer();
            }}>
            <Entypo name="list" size={24} color="orange" />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              paddingTop: 10,
              fontSize: 35,
            }}>
            Create or View Request
          </Text>

          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 1,
              backgroundColor: 'orange',
              width: '80%',
              alignSelf: 'center',
              height: 40,
              marginTop: 30,
              justifyContent: 'center',
              borderColor: 'orange',
            }}
            onPress={() => {
              this.props.navigation.navigate('AddPoojaRequest');
            }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>
              Create New Request
            </Text>
          </TouchableOpacity>
          <ScrollView>
            {this.state.requests.length===0?
             <View
             style={{
               flex: 1,
               justifyContent: "center",
               alignItems: "center",
             }}
           >
             <Text style={{marginTop:'30%', fontSize:18}}>Requests will appear here!</Text>
           </View>:this.state.requests.map((a) => {
              return (
                <TouchableOpacity
                key={a.id}
                  style={{
                    marginTop: 10,
                    width: '90%',
                    alignSelf: 'center',
                    borderRadius: 10,
                  }}>
                  <LinearGradient 
                    colors={['white', 'white']}
                    start={{ x: 0.7, y: 0.8 }}
                    style={{
                      borderRadius: 10,
                      padding: 10,
                      flex: 1,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                        {a.name}
                      </Text> 
                      <Text
                        style={{
                          backgroundColor: 'orange',
                          padding: 5,
                          borderRadius: 5, 
                        }}>
                        {a.responseStatus}
                      </Text>
                    </View>
                    <Text>Start: {a.dateStart}</Text>
                    <Text>End: {a.dateEnd}</Text>
                    <Text>Price: {a.price}</Text>
                    <Text>Seva: {a.sevaName}</Text>
                    <Text>Additional: {a.additionalPersons}</Text>
                    <Text>Response: {a.response}</Text>

                  </LinearGradient>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}
