import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
const themeColor = {
  // button: '#6C63FF', 
  lightPurple: '#A6A2FF', 
  // button: '#AEABFF', 
  bg: '#EEF1F6', 
};
export default function WelcomeScreen(){
  const navigation = useNavigation();
  
  return (
        <View className="flex-1" 
        style={{backgroundColor: themeColor.bg}}
        >
          <View className="flex-1 flex justify-around my-4">
              <View>
              <View className="flex-row justify-center">
                <Image source={require("../assets/undraw_Joyride_re_968t-removebg-preview.png")}
                style={{width:250, height: 250}} />
              </View>
              <Text className="text-gray-600 font-bold text-4xl text-center">
                Welcome!
              </Text>
              <Text className="text-gray-500 mx-6 font-semiBold text-sm text-center"> 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur."
              </Text>
            </View>
            <View className="space-y-4">
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}
              className="py-3 mx-7 rounded-py-3 rounded-3xl" style={{backgroundColor: themeColor.lightPurple}}>
                <Text className="text-xl font-bold text-center text-white">Sign Up</Text>
              </TouchableOpacity>
              <View className="flex-row justify-center">
                <Text className="text-gray-500 font-semibold">Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text className="font-semibold" style={{color: themeColor.lightPurple}}> Log In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
    );
  } 