import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import styles from './Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { colors } from '../Theme/Color';
import Images from '../Theme/Images';

export const LogIn =({navigation}) => {
  

      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
    
      return (
          <View style={styles.container}>
{/*     
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                < Ionicons name='ios-chevron-back' style={styles.backIcon} />
              </TouchableOpacity>
            </View> */}
    
            {/* ----------------------LOGO --------------------- */}
            <View>
            <Image source={Images.flipkart} style={styles.logoImg} />
            </View>
            {/* ----------------------EMAIL INPUT --------------------- */}
            <View style={styles.MobileBox}>
              <Feather name='voicemail' style={styles.InputIcon} />
              <TextInput style={styles.TextInput}
                placeholder='Email Id'
                placeholderTextColor="#003f5c"
              />
            </View>
            {/* ----------------------LOCK INPUT --------------------- */}
            <View style={styles.LockBox}>
              <Feather name='lock' style={styles.InputIcon} />
              <TextInput style={styles.TextInput}
                placeholder='Password'
                placeholderTextColor="#003f5c"
              />
              <TouchableOpacity>
                <AntDesign name='eyeo' style={styles.eyeIcon} />
              </TouchableOpacity>
            </View>
            {/* ----------------------FORGIT PASS--------------------- */}
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity>
                <MaterialIcons name='crop-square' style={styles.squarIcon}></MaterialIcons>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.Remeberme}>Remember Me</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={styles.Forgotpass}>Forgot password ?</Text>
              </TouchableOpacity>
            </View>
            {/* ----------------------NINE BOX  --------------------- */}
            <View style={styles.ORbox}>
              <View style={styles.FirstBorder}></View>
              <Text style={styles.OR}>OR</Text>
              <View style={styles.SecondBorder}></View>
            </View>
            {/* ----------------------IMAGESSS --------------------- */}
            <View style={styles.IconsBox}>
              {/* ----------------------google ICON --------------------- */}
              <View>
                <TouchableOpacity>
                  <AntDesign name='google' style={styles.IconsBoxes} />
                </TouchableOpacity>
              </View>
              {/* ----------------------APPLE ICON --------------------- */}
              <View>
                <TouchableOpacity>
                  <AntDesign name='apple1' style={[styles.IconsBoxes]} />
                </TouchableOpacity>
              </View>
            </View>
    
            {/* ----------------------SIGN IN BUTTON --------------------- */}
    
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
              <View style={styles.SingUPButton}>
    
                <Text style={styles.SignInText}>Log In</Text>
              </View>
            </TouchableOpacity>
    
            {/* ----------------------SIGN up line --------------------- */}
            <View style={{ flexDirection: 'row', marginTop: 10, alignSelf: 'center' }}>
              <Text style={styles.SingUPText}>Didn’t have any account?</Text>
              <TouchableOpacity  onPress={() => navigation.navigate('SignUp')}>
                <Text style={[styles.SingUPText1, { color:colors.blue }]}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
      )
    }
  
