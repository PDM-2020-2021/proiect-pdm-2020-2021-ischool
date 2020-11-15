import React from 'react';
import {StyleSheet, Text, View, Button, Image, TextInput,TouchableOpacity} from 'react-native';

export default class Login extends React.Component{
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
        return(
            <View>
             <View style={styles.login}>
                        <Image
                         source={require('./images/autentificare.jpg')}
                         style={styles.backgroundImage}
                        />
             </View>

              <View style = {styles.email}>
                 <Text style = {styles.text}>EMAIL</Text>
                  <TextInput
                      style={{ fontSize : 25, height: 50, borderColor: 'black', borderWidth: 2 }}
                  />
               </View>
              <View style = {styles.parola}>
               <Text style = {styles.text}>PAROLĂ</Text>
                <TextInput
                 secureTextEntry = {true}
                 style={{ fontSize : 25, height: 50, borderColor: 'black', borderWidth: 2 }}
                 />
              </View>


              <View>
               <TouchableOpacity
                    //onPress={() => navigation.navigate('Login')}
                    style ={styles.buttonLogin}>
                    <Text style={{fontSize: 20, textAlign: "center"}}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    login:{
        width: "100%",
        height: "170%",
        resizeMode: 'cover',
        position: 'absolute'
    },
    backgroundImage:{
        resizeMode: 'cover',
        position: 'absolute',
        height:"100%",

    },
    email : {

        fontWeight :"bold",
        textAlign:"center",
        fontSize: 20,
        width: "80%",
        marginLeft: 30,
        marginRight: 30,
        marginTop: 100,
        padding: 15,
    },
    parola: {
        fontWeight: "bold",
        textAlign:"center",
        fontSize: 20,
        width: "80%",
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        padding: 15,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonLogin:{
        backgroundColor:"#1498D5",
        marginTop: 50,
        marginLeft: 90,
        marginRight: 90,
        padding: 10,
        borderRadius:20,
        fontSize: 25,
    }
});