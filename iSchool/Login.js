import React from 'react';
import {StyleSheet, Text, View, Button, Image, TextInput,TouchableOpacity} from 'react-native';
import {firebase} from './firebase/config'

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
    state = {
        email: '',
        parola: ''
    }
    handleEmail=(text)=>{
        this.setState({email:text})
    }

    handleParola=(text)=>{
        this.setState({parola:text})
    }

    onLoginPress = (email, parola) => {
           firebase
               .auth()
               .signInWithEmailAndPassword(email, parola)
               .then((response) => {
                   const uid = response.user.uid
                   const usersRef = firebase.firestore().collection('users')
                   usersRef
                       .doc(uid)
                       .get()
                       .then(firestoreDocument => {
                           if (!firestoreDocument.exists) {
                               alert("User does not exist anymore.")
                               return;
                           }
                           const user = firestoreDocument.data()
                           if(user["profil"] == 'Uman')
                           {
                            this.props.navigation.navigate('Uman', {user: user})
                           }
                           else if(user['profil'] == 'Real')
                           {
                            this.props.navigation.navigate('Real', {user: user})
                           }
                       })
                       .catch(error => {
                           alert(error)
                       });
               })
               .catch(error => {
                   alert(error)
               })
      }
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
                      onChangeText={this.handleEmail}
                  />
               </View>
              <View style = {styles.parola}>
               <Text style = {styles.text}>PAROLĂ</Text>
                <TextInput
                 secureTextEntry = {true}
                 style={{ fontSize : 25, height: 50, borderColor: 'black', borderWidth: 2 }}
                 onChangeText={this.handleParola}
                 />
              </View>


              <View>
               <TouchableOpacity
                    onPress={() => this.onLoginPress(this.state.email, this.state.parola)}
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