import { StatusBar } from "expo-status-bar";
import React, {Component} from "react";
import { Platform, StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import PostCard from './PostCards'

export default class Feed extends Component {
  renderItem = ({item: post}) => {
    return <PostCard post={post} navigation = {this.props.navigation}/>
  }
  fetchPosts = () => {
    
  }
  render() {
      return (
        <View style = {styles.container}>
          <SafeAreaView style = {styles.droidSafeArea}/>
          <View style = {styles.appTitle}>
              <View style = {styles.appIcon}>
                <Image
                  source={require("../assets/logo.png")}
                  style = {styles.iconImage}
                ></Image>
              </View>
            <View style = {styles.appTitleTextContainer}>
              <Text style = {styles.appTitleText}>Espectograma</Text>
            </View>  
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            >
              <PostCard></PostCard>
            </FlatList>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight: 35
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row'
  },
  appIcon: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: 'center'
  },
  appTitleText: {
    color: 'white',
    fontSize: 20
  },
  cardContainer: {
    flex: 0.85
  }
})