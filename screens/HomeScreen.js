import { signOut } from 'firebase/auth';
import React, { Component } from 'react';
import { useWindowDimensions, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../config/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, UserIcon, PlusCircleIcon } from 'react-native-heroicons/solid';


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
  

function DefaultScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }

function PostScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Post Screen</Text>
        </View>
    );
}

function ProfileScreen() {
    const handleLogout = async()=>{
        await signOut(auth);
    }
    return (
        <SafeAreaView className="flex-1 flex-row justify-center items-center">
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile Screen</Text> 
                    <TouchableOpacity onPress={handleLogout} className="p-1 bg-red-400 rounded-lg">
                        <Text className="text-white text-lg font-bold">Logout</Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}