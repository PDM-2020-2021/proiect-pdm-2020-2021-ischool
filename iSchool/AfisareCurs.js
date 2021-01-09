import React from 'react';
import {StyleSheet, Text, View, Button, Image,TouchableOpacity,Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';


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

        const user=this.props.navigation.state.params.user
        const curs=this.props.navigation.state.params.curs
        const materia=this.props.navigation.state.params.materia

        const source={uri:'bundle-assets://'+materia+curs+user["clasa"]+'.pdf'}
        return(
        <Pdf
        source={source}

        style={styles.pdf}
        />


        );
    }
}
const styles = StyleSheet.create({
    pdf: {
           flex: 1,
           width: Dimensions.get('window').width,
           height:Dimensions.get('window').height
       }})