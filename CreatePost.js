import React, {Component} from "react";
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView, ScrollView, TextInput } from "react-native-web";

import { RFValue } from "react-native-responsive-fontsize";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from "react-native";
import React, {Component} from "react";

export default class PostScreen extends Component {
    fetchUser = () => {
        let theme;
        firebase
            .database()
            .ref('/users/' + firebase.auth().currentUser.uid)
            .on('value', (snapshot) => {
                theme = snapshot.val().current_theme
                this.setState({ light_theme: theme === 'light' })
            })
    }

    storys = (title, description, story, moral) => {
      const db = getDatabase();
      set(ref(db, '/storys/' + title), {
          title: title,
          description: description,
          story: story,
          moral: moral
      });
  }

    render() {
        const {title, description, story, moral} = this.state;
        let preview_Images = {
            image_1: require('../assets/story_image_1.png'),
            image_2: require('../assets/story_image_2.png'),
            image_3: require('../assets/story_image_3.png'),
            image_4: require('../assets/story_image_4.png'),
            image_5: require('../assets/story_image_5.png')
        }
        return (
            <View style={styles.container}>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image source={require("../assets/logo.png")}>
                        </Image> 
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>
                            Criar Historias</Text>  
                    </View>
                </View >
                <View style={styles.fieldsContainer}>
                    
                    <Image source={preview_Images[this.state.previewImage]}
                    style={styles.previewImage}></Image>
                
                    <View>
                        <DropDownPicker
                            items={[
                                {label: "Image 1", value: "image_1"},
                                {label: "Image 2", value: "image_2"},
                                {label: "Image 3", value: "image_3"},
                                {label: "Image 4", value: "image_4"},
                                {label: "Image 5", value: "image_5"}
                            ]}
                            defaultValue={this.state.previewImage}
                            containerStyle={{
                                height: 40,
                                bordeRadius:20,
                                marginBottom:10
                            }}
                            onOpen={()=>{
                                this.setState({dropdownHeight: 170});
                                }       
                            }
                            onClose={()=>{
                                this.setState({dropdownHeight: 40});
                            }}
                            style={{
                                backgroundColor: "transparent"
                            }}
                            itemStyle={{
                                justifyContent:"flex-start"
                            }}
                            arrowStyle={{
                                color:"white"
                            }}
                            labelStyle={{
                                color:"white"
                            }}
                            onChangeItem={item =>
                                this.setState({
                                    previewImages:item.value
                                })
                            }
                        />
                    </View>
            
                    <TextInput
                        style={styles.inputFont}
                        onChangeText={text => this.setState({ title: text })}
                        placeholder={"Título"}
                        placeholderTextColor="white" 
                    />

                    <TextInput
                        style={[
                        styles.inputFont,
                        styles.inputFontExtra,
                        styles.inputTextBig
                    ]}
                        onChangeText={text => this.setState({ description: text })}
                        placeholder={"Descrição"}
                        multiline={true}
                        numberOfLines={4}
                        placeholderTextColor="white"
                    />

                    <TextInput
                        style={[
                            styles.inputFont,
                            styles.inputFontExtra,
                            styles.inputTextBig
                        ]}
                        onChangeText={text => this.setState({ story: text })}
                        placeholder={"História"}
                        multiline={true}
                        numberOfLines={20}
                        placeholderTextColor="white"
                    />

                    <TextInput
                        style={[
                        styles.inputFont,
                        styles.inputFontExtra,
                        styles.inputTextBig
                        ]}
                        onChangeText={text => this.setState({ moral: text })}
                        placeholder={"Moral da História"}
                        multiline={true}
                        numberOfLines={4}
                        placeholderTextColor="white"
                    />
                    
                    <TouchableOpacity style = {styles.button} 
                    onPress = {() => this.storys(title, description, story, moral)}>
                        <Text style = {styles.buttonText}>Criar História</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
  postCardLight: {
      margin: RFValue(20),
      backgroundColor: '#eaeaea',
      borderRadius: RFValue(20)
  },
  authorNameText: {
      margin: RFValue(20),
      backgroundColor: 'white',
      borderRadius: RFValue(20)
  },
  authorNameTextLight: {
      margin: RFValue(20),
      backgroundColor: 'black',
      borderRadius: RFValue(20)
  }
})