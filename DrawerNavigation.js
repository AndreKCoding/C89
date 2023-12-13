import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator'
import Profile from "../screens/Profile"
import { FlatList, SafeAreaView } from 'react-native-web';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    
    return (
        <View>
            <SafeAreaView/>
            <View>
                <View>
                    <Image>

                    </Image>
                </View>
                <View>
                    <Text>Espectagrama</Text>
                </View>
            </View>
            <View>
                <FlatList
                    keyExtractor = {this.keyExtractor}
                    data = {posts}
                    renderItem = {this.renderItem}
                />
            </View>
        </View>
    )
}

export default DrawerNavigator;