import { View, StyleSheet, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from "react-native";
import React, { Component } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from '../config';

const db = getDatabase();

export default class Registrar extends Component {
    constructor (props) {
        super(props);
        this.state = {
          nome: "",
          sobrenome: "",
          email: "",
          password: "",
          confirmPassword: ''
        };
      }
    
    registrar = (nome, sobrenome, email, password, confirmPassword) => {
        if (password == confirmPassword) {
          const auth = getAuth();
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              // const user = userCredential.user;
              console.log('Usuário registrado!');
              // ...
              set(ref(db, '/users/' + userCredential.user.uid), {
                nome: nome,
                sobrenome: sobrenome,
                email: userCredential.user.email
              });
            })
            .catch((error) => {
              // const errorCode = error.code;
              // const errorMessage = error.message;
              console.error(error);
              // ..
            });
        }
        else {
          console.log('As senhas são diferentes.')
        }
    }
      
    render() { 
        const {nome, sobrenome, email, password, confirmPassword} = this.state;
        return (
          <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
            <View style = {styles.view}>
              <Text style = {styles.appTitleText}>Tela de Cadastro</Text>

              <TextInput 
              onChangeText = {text => this.setState({nome: text})} 
              style = {[styles.textInput, {marginTop: 10}]}
              placeholder = {"Insira seu Nome"}
              />

              <TextInput 
              onChangeText = {text => this.setState({sobrenome: text})} 
              style = {[styles.textInput, {marginTop: 10}]}
              placeholder = {"Insira seu Sobrenome"}
              />
    
              <TextInput 
              onChangeText = {text => this.setState({email: text})} 
              style = {[styles.textInput, {marginTop: 25}]}
              placeholder = {"Insira seu Email"}
              />
    
              <TextInput 
              onChangeText = {text => this.setState({password: text})} 
              secureTextEntry style = {[styles.textInput, {marginTop: 25}]}
              placeholder = {"Insira sua senha"}
              />

              <TextInput 
              onChangeText = {text => this.setState({confirmPassword: text})} 
              secureTextEntry style = {[styles.textInput, {marginTop: 10}]}
              placeholder = {"Confirme sua senha"}
              />
    
              <TouchableOpacity style = {styles.button} 
              onPress = {() => this.registrar(nome, sobrenome, email, password, confirmPassword)}>
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