import { signOut } from 'firebase/auth';
import React, { Component } from 'react';
import { useWindowDimensions, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../config/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, UserIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import DefaultScreen from './DefaultScreen';
import PostScreen from './PostScreen';
import ProfileScreen from './ProfileScreen';


const Tab = createBottomTabNavigator();

export default function HomeScreen () {
    const dimensions = useWindowDimensions();
    return (

    <Tab.Navigator
    screenOptions={{
      tabBarItemStyle: {
        width: 180
      },
      tabBarStyle: {
        display: 'flex',
      },
      tabBarActiveTintColor: '#9C7EE2',
    }}
  >
    <Tab.Screen
        name="Home"
        component={DefaultScreen}
        options={{
        tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />  
        ),
        }}
    />
    <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
        tabBarIcon: ({ color, size }) => (
            <PlusCircleIcon color={color} size={size} />  
        ),
        }}
    />
    <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ 
        tabBarIcon: ({ color, size }) => (
            <UserIcon color={color} size={size} />  
        ),
        }}
    />

    </Tab.Navigator>
    );
  }
  

// function DefaultScreen() {
//     return (
//         <View className="flex-1">
//             <View className="w-1/8 h-1/2 h-200 justify-center items-center" style={{backgroundColor: '#9C7EE2'}}>
//                 <Text className="text-white text-xl">Calendar Component Here</Text>
//             </View>
//             <View className="flex-1 h-200 justify-center items-center">
//                 <Text>Other Content Here</Text>
//             </View>
//         </View>
//     );
//   }

// function PostScreen() {
//     return (
//         <View className="flex-1 justify-center items-center">
//             <Text>Post Screen</Text>
//         </View>
//     );
// }

// function ProfileScreen() {
//     const handleLogout = async()=>{
//         await signOut(auth);
//     }
//     return (
//         <SafeAreaView className="flex-1 flex-row justify-center items-center">
//             <Text>Profile Screen</Text> 
//                 <TouchableOpacity onPress={handleLogout} className="p-1 bg-red-400 rounded-lg">
//                     <Text className="text-white text-lg font-bold">Logout</Text>
//                 </TouchableOpacity>
//         </SafeAreaView>
//     );
// }