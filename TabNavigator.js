import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePost from "../screens/CreatePost"
import Feed from "../screens/Feed"

const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'CreatePost') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Feed') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } 

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="CreatePost" component={CreatePost} />
        <Tab.Screen name="Feed" component={Feed} />
      </Tab.Navigator>
  );
}

export default BottomTabNavigator;