import React, {Component} from "react";
import { StyleSheet, Text, View, Switch } from 'react-native';

export default class Profile extends Component {
    toggleSwitch() {
        const previous_state = this.state.isEnabled;
        const theme = !this.state.isEnabled ? 'dark' : 'light'
        var updates = {}
        updates['users' + firebase.auth().currentUser.uid + 'current_theme'] = theme;
        firebase.database().ref().update(updates);
        this.setState({isEnabled: previous_state, light_theme: previous_state})
    }
    render() {
        return (
            <View>
                <Text>Perfil</Text>
                <Switch onChange={this.toggleSwitch}></Switch>
            </View>
        );
    }
}