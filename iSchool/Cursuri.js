import React from 'react';
import {StyleSheet, Text, View, Button, Image,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = dimensions.height;
const imageWidth = dimensions.width;
export default class Uman extends React.Component{
    static navigationOptions = {
        title: '',
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
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

    };
    render()
    {
    const {navigate} = this.props.navigation;
    const user=this.props.navigation.state.params.user
    const materia=this.props.navigation.state.params.materia
        return(
            <View style={styles.real}>
             <Image
                         source={require('./images/uman.jpg')}
                          style={{ height: imageHeight, width: imageWidth,resizeMode:'cover',position:'absolute' }}

                        />
              <View style={styles.top}>
              <Text style={styles.text1}>Alege cursul</Text>
                </View>
              <View style={styles.button}>
              <TouchableOpacity
                onPress={() => navigate('AfisareCurs',{user:user,curs:"Curs1",materia:materia})}
                style={styles.button1}
              >
              <Text style={styles.text}>Cursul 1</Text>
              </TouchableOpacity>

                            <TouchableOpacity
                              style={styles.button1}
                              onPress={() => navigate('AfisareCurs',{user:user,curs:"Curs2",materia:materia})}
                            >
                            <Text style={styles.text}>Cursul 2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                     style={styles.button1}
                                     onPress={() => navigate('AfisareCurs',{user:user,curs:"Curs3",materia:materia})}
                              >
                             <Text style={styles.text}>Cursul 3</Text>
                             </TouchableOpacity>
                             <TouchableOpacity
                             style={styles.button1}
                             onPress={() => navigate('AfisareCurs',{user:user,curs:"Curs4",materia:materia})}
                               >
                              <Text style={styles.text}>Cursul 4</Text>
                             </TouchableOpacity>
                             <TouchableOpacity
                               style={styles.button1}
                               onPress={() => navigate('AfisareCurs',{user:user,curs:"Curs5",materia:materia})}
                               >
                                <Text style={styles.text}>Cursul 5</Text>
                                 </TouchableOpacity>
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