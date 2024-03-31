import React, { Component, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import {  } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';


const themeColor = {
  // button: '#6C63FF', 
  lightPurple: '#A6A2FF', 
  // button: '#AEABFF', 
  bg: '#EEF1F6', 
  bgColor: '#B8B6FF', 
};

export default function SignUpScreen () {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async ()=>{
    if(email && password){
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // navigation.navigate("Home");
      } catch (err) {
        console.log('got error: ',err.message);
        // alert(error.message);
        
      }

    }
  }
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColor.bgColor}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="bg-white p-2 rounded-2xl ml-4">
            <ArrowLeftIcon size="20" color="black"/>
          </TouchableOpacity> 
        </View>
        <View className="flex-row justify-center">
          <Image source={require('../assets/undraw_Diary_re_4jpc-removebg-preview.png')} 
          style={{width:150, height:150}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
      style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} >
        <View className="form space-y-2">
          {/* <Text className="text-gray-700 ml-4">Full Name</Text>
          <TextInput className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3"
          value={"China T. Bea"}
          placeholder='Enter Name' /> */}
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder='Enter Email' />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-5"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder='Enter Password' />
          <TouchableOpacity className="py-3 rounded-3xl" style={{backgroundColor: themeColor.lightPurple}}
          onPress={handleSubmit}
          
          >
            <Text className="font-xl font-bold text-center text-white">SIGN UP</Text>
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
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="font-semibold" style={{color: themeColor.lightPurple}}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
  


