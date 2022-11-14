import styles from './Style';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { colors } from "../Theme/Color";
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ForgetPassword = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <View>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        < Ionicons name='ios-chevron-back' style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.head}>Forgot Password</Text>
                </View>
            </View>


            <View>
                <View style={styles.EmailBox}>
                    <Feather name='voicemail' style={styles.InputIcon} />
                    <TextInput style={styles.TextInput}
                        placeholder='Email/Mobile no.'
                        placeholderTextColor="#003f5c"
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
                        <View style={styles.SubmitButton}>

                            <Text style={styles.SubmitText}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}