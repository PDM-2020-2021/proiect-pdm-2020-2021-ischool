import React from 'react';
import {StyleSheet, Text, View, Button, Image,TouchableOpacity} from 'react-native';

export default class Home extends React.Component{
    static navigationOptions = ({navigation}) =>( {

        title: '',
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
        headerRight: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Login')}
                      style = {{backgroundColor:"#1498D5", margin: 10, padding: 10, borderRadius:10, fontSize: 16}}>
                     <Text>Login</Text>

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
    {
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.home}>
            <Image
             source={require('./images/book.jpg')}
             style={styles.backgroundImage}
            />

            <View style={[{ width: "70%", marginRight: 30, marginLeft: 60, marginTop: 200, height: "100%"}]}>
             <View>
             <Text style={styles.text}>Bine ați venit pe platforma online iSchool!</Text>
             </View>
             <View style = {styles.sign}>
                  <Button style={styles.signUpButton} title='Sign up FREE' onPress = {() => navigate('SignUp')}/>
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
        backgroundColor: "#1498D5",
        borderRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 22,
        marginRight:30,
        width: 150,
     },
    signUpButton: {
        backgroundColor: "#1498D5",
        width: 200,
        height: 600,
        borderRadius:20,
        fontSize: 25,
    },
    backgroundImage:{
        resizeMode: 'cover',
        position: 'absolute',
        height:"100%",

    },
    text:{
        fontWeight :"bold",
        textAlign:"center",
        fontSize: 30,
        color: "#1498D5",
    },
    sign: {
        marginTop: 30,
        marginLeft:50,
        marginRight:40,
        backgroundColor: "#1498D5",
        opacity: 0.8,
        borderRadius: 20,
      },
    });