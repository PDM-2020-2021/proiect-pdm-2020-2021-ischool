import React from 'react';
import {StyleSheet, Text, View, Button, Image,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import {firebase} from './firebase/config'

const dimensions = Dimensions.get('window');
const imageHeight = dimensions.height;
const imageWidth = dimensions.width;
export default class Uman extends React.Component{
    static navigationOptions = ({navigation}) =>( {
        title: '',
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
        headerRight: () => (
                                    <TouchableOpacity
                                      onPress={() => {navigation.navigate('Home'); firebase.auth().signOut().then(()=>console.log('User signed out'));}}
                                      style = {{backgroundColor:"#1498D5", margin: 10, padding: 10, borderRadius:10, fontSize: 16}}>
                                     <Text>Logout</Text>
                                    </TouchableOpacity>
                         )
        ,
        headerLeft: () => (
                    <Image
                     source = {require('./images/logo.png')}
                     style={{
                                 marginLeft: 10,
                                 height: 35,
                                 width: 260
                               }}
                    />
        ),

 });

    render()
    {    const {navigate} = this.props.navigation;
    const user=this.props.navigation.state.params.user

        return(
            <View style={styles.real}>
             <Image
                         source={require('./images/uman.jpg')}
                          style={{ height: imageHeight, width: imageWidth,resizeMode:'cover',position:'absolute' }}

                        />
              <View style={styles.top}>
              <Text style={styles.text1}>Alege disciplina</Text>
                </View>
              <View style={styles.button}>
              <TouchableOpacity
                onPress={() => navigate('Cursuri',{user:user,materia:"Romana"})}
                style={styles.button1}
              >
              <Text style={styles.text}>Limba Română</Text>
              </TouchableOpacity>

              <View style={styles.buttonInfo}>
                            <TouchableOpacity
                            onPress={() => navigate('Cursuri',{user:user,materia:"Istorie"})}
                              style={styles.button1}
                            >
                            <Text style={styles.text}>Istorie</Text>
                            </TouchableOpacity>
                            </View>
            </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({

            real: {
              width: "100%",
               height: "100%",
                },
                button: {
                    flex: 0.52,
                    marginTop: 140,
                    marginLeft:50,
                    marginRight:50,

                  },
                   buttonInfo: {
                           flex: 0.52,
                           marginTop:50,
                               },
                  top: {

                     marginTop:100,
                      marginLeft:50,
                     marginRight:50,

                                    },
                  button1: {
                      alignItems: "center",
                      backgroundColor: "#DDDDDD",
                      padding: 10,
                      borderRadius:50,
                    },
    text:{
        fontWeight :"bold",
        textAlign:"center",
        fontSize: 30,
        color: "#1498D5",
    },
    text1:{
            fontWeight :"bold",
            textAlign:"center",
            fontSize: 50,
            color: 'black',
        },
    });