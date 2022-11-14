
import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Button, Alert, TextInput } from 'react-native';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';

import OTPTextView from 'react-native-otp-textinput';

export const OTP = ({ navigation }) => {

    state = {
        otpInput: '',
        inputText: '',
    };

    alertText = () => {
        const { otpInput = '' } = this.state;
        if (otpInput) {
            Alert.alert(otpInput);
        }
    };

    clear = () => {
        this.input1.clear();
    };

    updateOtpText = () => {
        this.input1.setValue(this.state.inputText);
    };
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        < Ionicons name='ios-chevron-back' style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.head}>Enter your OTP</Text>
                </View>
            </View>
            <View style={styles.Jcenter}>
                <OTPTextView
                    handleTextChange={(e) => { }}
                    containerStyle={styles.textInputContainer}
                    textInputStyle={styles.roundedTextInput}
                    defaultValue="1234"
                    tintColor="#3498DB"
                />
            </View>
            <View style={styles.Jcenter}>
                <TouchableOpacity onPress={() => navigation.navigate('LogIn')} >
                    <View style={styles.Button}>

                        <Text style={styles.BText}>Continue</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );


}