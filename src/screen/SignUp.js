import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
export default class SignUp extends Component {
    render() {
        const {container}=styles;
        return (
           <View  style={container} >
               <Text>Sign Up</Text>
           </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})