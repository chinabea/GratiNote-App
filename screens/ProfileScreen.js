import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
    const handleLogout = async()=>{
        await signOut(auth);
    }
    return (
        <SafeAreaView className="flex-1 flex-row justify-center items-center">
            <Text>Profile Screen </Text> 
                <TouchableOpacity onPress={handleLogout} className="p-1 bg-red-400 rounded-lg">
                    <Text className="text-white text-lg font-bold">Logout</Text>
                </TouchableOpacity>
        </SafeAreaView>
    );
  }

export default ProfileScreen;
