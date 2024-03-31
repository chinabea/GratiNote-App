import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from "react-native-heroicons/solid";


const themeColor = {
  // button: '#6C63FF', 
  lightPurple: '#A6A2FF', 
  // button: '#AEABFF', 
  bg: '#EEF1F6', 
  bgColor: '#B8B6FF', 
};

export default function LoginScreen () {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColor.bgColor}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="bg-white p-2 rounded-2xl ml-4">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity> 
        </View>
        <View className="flex-row justify-center">
          <Image source={require('../assets/login.png')} 
          style={{width:200, height:200}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
      style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3"
          value="china.t.bea@gmail.com"
          placeholder='Enter Email' />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput className="p-3 bg-gray-100 text-gray-700 rounded-2xl"
          secureTextEntry
          value="prettypretty"
          placeholder='Enter Password' />
          <TouchableOpacity className="flex items-end mb-5">
            <Text className="text-gray-700">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-3 rounded-3xl" style={{backgroundColor: themeColor.lightPurple }}>
            <Text className="font-xl font-bold text-center text-white">LOGIN</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-sm text-gray-700 font-bold text-center py-5">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons8-google-30.png')} 
            className="w-7 h-7"/>
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons8-facebook-48.png')} 
            className="w-7 h-7"/>
          </TouchableOpacity>
          {/* <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons8-facebook-48.png')} 
            className="w-10 h-10"/>
          </TouchableOpacity> */}
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text className="font-semibold" style={{ color: themeColor.lightPurple}}> Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
  


