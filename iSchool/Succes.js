import React from 'react';
import {StyleSheet, Text, View, Button, Image,TouchableOpacity} from 'react-native';

export default class Succes extends React.Component{
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
        return(
            <View style={styles.home}>
            <Image
             source={require('./images/book.jpg')}
             style={styles.backgroundImage}
            />

            <View style={[{ width: "70%", marginRight: 30, marginLeft: 60, marginTop: 100, height: "100%"}]}>
             <Text style={styles.text}>Contul a fost creat cu succes!</Text>


            <View style={styles.button}>
                          <TouchableOpacity
			    onPress={() => navigate('Login')}
                            style={styles.signInButton}
                          >
                          <Text style={styles.text}>Descoperă cursurile</Text>
                          </TouchableOpacity>
              </View>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    home: {
      width: "100%",
      height: "100%",

    },
    loginButton: {
        elevation: 8,
        backgroundColor: "#1498D5",
        borderRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 22,
        marginRight:30,
        width: 150,
     },
    signInButton: {
        backgroundColor: "grey",
        borderRadius:20,
        padding:10,

    },
    backgroundImage:{
        resizeMode: 'cover',
        position: 'absolute',
        height:"100%",

    },
    button:{
        marginTop: 150,
        marginLeft: 50,
        marginRight:50,
        opacity:0.3,
    },
    text:{
        fontWeight :"bold",
        textAlign:"center",
        fontSize: 30,
        color: "#1498D5",
    }
    });