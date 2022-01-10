import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//Cross axis - alignItems
import { Entypo } from '@expo/vector-icons';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              width: '100%',
              height: '30%',
              borderBottomLeftRadius: 30,
            }}>
            <LinearGradient
              colors={['#f9d976', '#f39f86']}
              style={{
                width: '100%',
                height: '100%',
                borderBottomLeftRadius: 30,
                paddingTop: 40,
                paddingBottom: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: '5%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.openDrawer();
                  }}>
                  <Entypo name="list" size={24} color="white" />
                </TouchableOpacity>
                <Image
                  source={require("../assets/icon.png")}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
                <Text></Text>
              </View>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginHorizontal: '5%',
                }}>
                Home
              </Text>
            </LinearGradient>
          </View>


          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 50,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFDDAA',
                width: '40%',
                borderRadius: 10,
                padding: 10,
                height: 200,
              }}
              onPress={() => {
                this.props.navigation.navigate('PoojaRequest');
              }}>
              <Image
                source={require('../assets/pray.png')}
                style={{
                  width: '90%',
                  height: '70%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 10,
                }}>
                Pooja Request
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#FFDDAA',
                width: '40%',
                borderRadius: 10,
                padding: 10,
                height: 200,
              }}
              onPress={() => {
                this.props.navigation.navigate('Profile');
              }}>
              <Image
               source={require('../assets/profileImg.png')}
                style={{
                  width: '90%',
                  height: '70%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 10,
                }}>
                Profile
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFDDAA',
                width: '40%',
                borderRadius: 10,
                padding: 10,
                height: 200,
              }}
              onPress={() => {
                Linking.openURL('https://hindutemplede.org/donation/');
              }}>
              <Image
                source={require('../assets/donate.png')}
                style={{
                  width: '90%',
                  height: '70%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 10,
                }}>
                Donate
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#FFDDAA',
                width: '40%',
                borderRadius: 10,
                padding: 10,
                height: 200,
              }}
              onPress={() => {
                Linking.openURL('https://hindutemplede.org/');
              }}>
              <Image
                source={require('../assets/link.png')}
                style={{
                  width: '90%',
                  height: '70%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 10,
                }}>
                Our Website
              </Text>
            </TouchableOpacity>
          </View>
          <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginTop: 30,
                  justifyContent:"center",
                  textAlign:"center",
                  paddingBottom:50
                }}>
                ALWAYS WE DO MORE THAN IS REQUIRED OF YOU.
              </Text>
        </ScrollView>
      </View>
    );
  }
}
