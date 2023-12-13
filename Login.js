import { View, StyleSheet, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from "react-native";
import React, {Component} from "react";

import {auth} from "../config"
import { signInWithEmailAndPassword } from "firebase/auth";

export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  enter = (email, password) => {
    console.log(email);
    console.log(password);
    
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Bem vindo");
      this.props.navigation.replace('Navigation');
    })
    .catch((error) => {
      console.log("Senha ou Email Incorreto");
    });
  }

  

  render() { 
    const {email, password} = this.state;
    return (
      <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
        <View style = {styles.view}>
          <Text style = {styles.appTitleText}>Tela de Login</Text>

          <TextInput 
          onChangeText = {text => this.setState({email: text})} 
          style = {[styles.textInput, {marginTop: 100}]}
          placeholder = {"Insira seu Email"}
          />

          <TextInput 
          onChangeText = {text => this.setState({password: text})} 
          secureTextEntry style = {styles.textInput}
          placeholder = {"Insira sua senha"}
          />

          <TouchableOpacity style = {styles.button} onPress = {() => this.enter(email, password)}>
            <Text style = {styles.buttonText}>Entrar</Text>
          </TouchableOpacity>  
          <TouchableOpacity 
          style = {styles.buttonCriar} 
          onPress={() => this.props.navigation.navigate("Registrar")}>
            <Text style = {styles.buttonText}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: "#15193c", 
    alignItems: "center", 
    justifyContent: "center" 
  },
  appIcon: { 
    width: 400, 
    height: 400, 
    resizeMode: "contain", 
    marginBottom: 20 
  }, 
  appTitleText: { 
    color: "white", 
    textAlign: "center", 
    fontSize: 40, 
    marginBottom: 20 
  }, 
  textInput: { 
    width: 600, 
    margin: 10,
    height: 50, 
    padding: 10, 
    borderColor: "#FFFFFF", 
    borderWidth: 4, 
    borderRadius: 10, 
    fontSize: 30, 
    color: "#FFFFFF", 
    backgroundColor: "#15193c", 
  }, 
  button: { 
    width: 250, 
    height: 50, 
    flexDirection: "row", 
    justifyContent: "space-evenly", 
    alignItems: "center", 
    borderRadius: 30,
    color: 'white',
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 100
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonCriar: { 
    width: 250, 
    height: 45, 
    flexDirection: "row", 
    justifyContent: "space-evenly", 
    alignItems: "center", 
    borderRadius: 30,
    color: 'white',
    backgroundColor: 'white',
    margin: 10,
    marginLeft: 180,
    marginTop: '300'
  },
});