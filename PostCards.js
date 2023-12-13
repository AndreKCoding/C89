import { RFValue } from "react-native-responsive-fontsize";
import { View } from "react-native-web";
import React, {Component} from "react";
import DrawerNavigator from "../navigation/DrawerNavigation";

export default class Feed extends Component {
    render() {
        return (
             <View>
                <View>
                    <View>
                        <View>
                            <Image
                                source={require('../assets/favicon.png')}
                            ></Image>
                        </View>
                        <View>
                            <Text>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <View>
                        <Text>

                        </Text>
                    </View>
                    <View>
                        <View>
                            <Ionicons/>
                            <Text>12K</Text>
                        </View>
                    </View>
                </View>
             </View>
        );
    }
}