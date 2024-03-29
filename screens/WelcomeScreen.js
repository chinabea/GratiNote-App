import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
const themeColor = {
  bg: '#B8B6FF', 
};
export default function WelcomeScreen(){
  const navigation = useNavigation();
  
return (
      <View className="flex-1" style={{backgroundColor: themeColor.bg}}>
        <View className="flex-1 flex justify-around my-4">
          <Text className="text-white font-bold text-4xl text-center">
            Let's Get Started!
          </Text>
          <View className="flex-row justify-center">
            <Image source={require("../assets/undraw_fall_thyk-removebg-preview.png")}
            style={{width:250, height: 250}} />
          </View>
          <View className="space-y-4">
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}
            className="py-3 bg-blue-700 mx-7 rounded-xl">
              <Text className="text-xl font-bold text-center text-white">Sign Up</Text>
            </TouchableOpacity>
            <View className="flex-row justify-center">
              <Text className="text-white font-semibold">Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text className="font-semibold text-blue-700"> Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
  );
} 