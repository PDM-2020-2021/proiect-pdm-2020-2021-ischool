import React from 'react';
import {Picker,StyleSheet, Text, View, Button, Image, TextInput,TouchableOpacity,ScrollView } from 'react-native';
import {firebase} from './firebase/config'



export default class SignUp extends React.Component{

state={
                  email:'',
                  parola:'',
                  liceu:'',
                  oras:'',
                  nume:'',
                  prenume:'',
                  clasa:'a IX-a',
                  profil:'Real'}
     handleEmail=(text)=>{
        this.setState({email:text})
     }
      handleLiceu=(text)=>{
             this.setState({liceu:text})
          }
           handleParola=(text)=>{
                  this.setState({parola:text})
               }
                handleNume=(text)=>{
                       this.setState({nume:text})
                    }
                     handlePrenume=(text)=>{
                            this.setState({prenume:text})
                         }
                          handleOras=(text)=>{
                                 this.setState({oras:text})
                              }


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

        updateClass = (clasa) => {
            this.setState({ clasa: clasa })};
        updateProfil = (profil) => {
            this.setState({profil:profil})
        };

        constructor(props) {
                    super(props);
                    this.state={
                    email:'',
                    parola:'',
                    liceu:'',
                    oras:'',
                    nume:'',
                    prenume:'',
                    clasa:'a IX-a',
                    profil:'Real'
                    };
                    }
         onRegisterPress= (email, parola, nume,prenume,liceu,oras, clasa, profil)=> {

                           firebase
                                 .auth()
                                 .createUserWithEmailAndPassword(email, parola)
                                 .then((response) => {
                                     const uid = response.user.uid
                                     const data = {
                                         id: uid,
                                         email,
                                         nume,
                                        prenume,
                                        liceu,
                                        oras,
                                        clasa,
                                        profil
                                     };

                              const usersRef= firebase.firestore().collection('users')
                                  usersRef
                                         .doc(uid)
                                         .set(data)
                                         .then(() => {
                                             this.props.navigation.navigate('Succes', {user: data})
                                         })
                                         .catch((error) => {
                                             alert(error)
                                         });
                                 })

                                 .catch((error) => {
                                     alert(error)
                             });
                         }

    render()
    {

        return(
        <View>
        <Image
           source={require('./images/signUpBackground.jpg')}
           style={styles.backgroundImage}
        />
        <ScrollView style = {styles.scrollView}>
            <View style = {styles.inreg}>
            <Text style={styles.inregistare}>ÎNREGISTRARE</Text>
            </View>
            <View style = {styles.container}>
                <View>
                <TextInput
                    style = {styles.input}
                    placeholder = 'Nume'
                    autoCapitalize = "none"
                    placeholderTextColor = 'white'
                    onChangeText={this.handleNume}
                 />
                <TextInput
                  style = {styles.input}
                  placeholder = 'Prenume'
                  autoCapitalize = "none"
                  placeholderTextColor = 'white'
                  onChangeText={this.handlePrenume}
                />
                <TextInput
                  style = {styles.input}
                  placeholder = 'Email'
                  autoCapitalize = "none"
                  placeholderTextColor = 'white'
                  onChangeText={this.handleEmail}
                />
                <TextInput
                  style = {styles.input}
                  placeholder = 'Parola'
                  secureTextEntry = {true}
                  autoCapitalize = "none"
                  placeholderTextColor = 'white'
                  onChangeText={this.handleParola}
                />
                </View>
                <View style = {styles.clasa}>
                <Text style={styles.inputClasa}>Clasa</Text>
                <Picker
                 style={{
                     height:63,
                     width: 150,
                     color: 'white',
                     borderBottomColor: 'white',
                     borderBottomWidth: 1,
                     textAlign: "right",
                     fontSize: 25,
                 }}
                selectedValue = {this.state.clasa} onValueChange = {this.updateClass}
                >
                 <Picker.Item label = "a IX-a" value = "aIXa"/>
                 <Picker.Item label = "a X-a" value = "aXa"/>
                 <Picker.Item label = "a XI-a" value = "aXIa"/>
                 <Picker.Item label = "a XII-a" value = "aXIIa"/>
                </Picker>
                </View>

                <View>
                    <TextInput
                    style = {styles.input}
                    placeholder = 'Liceu'
                    autoCapitalize = "none"
                    placeholderTextColor = 'white'
                    onChangeText={this.handleLiceu}
                    />
                </View>
                <View style = {styles.clasa}>
                    <Text style={styles.inputClasa}>Profil</Text>
                    <Picker
                        style={{
                            height:63,
                            width: 150,
                            color: 'white',
                            borderBottomColor: 'white',
                            borderBottomWidth: 1,
                            textAlign: "right",
                            fontSize: 25,
                            }}
                        selectedValue = {this.state.profil} onValueChange = {this.updateProfil}
                    >
                     <Picker.Item label = "Real" value = "Real"/>
                     <Picker.Item label = "Uman" value = "Uman"/>
                     </Picker>
                </View>

                <View>
                <TextInput
                  style = {styles.input}
                  placeholder = 'Oras'
                  autoCapitalize = "none"
                  placeholderTextColor = 'white'
                  onChangeText={this.handleOras}
                 />
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() =>  this.onRegisterPress(this.state.email, this.state.parola,this.state.nume,this.state.prenume,this.state.liceu,this.state.oras, this.state.clasa, this.state.profil)}
                    style ={styles.buttonSignUp}
                  >
                  <Text style={{fontSize: 20, textAlign: "center"}}>SignUp</Text>
                  </TouchableOpacity>
                </View>

            </View>
            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  inreg: {
    marginTop: 20,
    marginLeft:50,
    marginRight:40,
    backgroundColor: "black",
    opacity: 0.8,
    borderRadius: 20,
  },
  inregistare: {
    margin: 17,
    marginLeft: 43,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 23,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  input: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: 350,
    height: 38,
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
    opacity: 0.7,
    borderRadius: 10,
    marginTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 13,
    height: 20,
  },
  buttonSignUp:{
    backgroundColor:"#1498D5",
    marginTop: 5,
    marginLeft: 90,
    marginRight: 90,
    padding: 5,
    borderRadius:20,
    fontSize: 25,
  },
  backgroundImage:{
    resizeMode: 'cover',
    position: 'absolute',
    height:"100%",
    opacity: 0.9,

   },
   clasa: {
    flexDirection: 'row',
   },
   inputClasa: {
     borderBottomColor: 'white',
     borderBottomWidth: 1,
     width: 192,
     height: 38,
     margin: 10,
     padding: 8,
     color: 'white',
     borderRadius: 14,
     fontSize: 18,
     fontWeight: '500',
   },
})