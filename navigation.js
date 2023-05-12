import * as React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/homescreen';
import ProfileScreen from './screen/profilescreen';
import Posting from './screen/postingscreen';
import detailscreen from './screen/detailscreen';
import Editprofile from './screen/editprofilscreen';
import Upload from './screen/uploadscreen';
import Login from './screen/loginscreen';
import Register from './screen/registercreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Homes') {
            return <AntDesign name="home" size={24} color="black" />;
          } else if (route.name === 'Posting') {
            return <AntDesign name="shoppingcart" size={24} color="black" />;
          } else if (route.name === 'Profile') {
            return <AntDesign name="user" size={24} color="black" />;
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato',
      })}
    >
      <Tab.Screen name="Homes" component={HomeScreen} />
      <Tab.Screen name="Posting" component={Posting} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Product Details" component={detailscreen} options={{ presentation: 'modal' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Edit Profile" component={Editprofile} /> 
        <Stack.Screen name="Upload" component={Upload} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
