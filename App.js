import { View, Text } from 'react-native'
import React from 'react'
import { LogIn } from './Src/Container/LogInScreen/Index'
import { SignUp } from './Src/Container/SignUpScreen/Index'
import { ForgetPassword } from './Src/Container/ForgetPasswordScreen/Index'
import { NavigationContainer } from '@react-navigation/native';
import { LogInStack } from './Src/Componet/NavigationRute/StackNavigation'
import { OTP } from './Src/Container/OTPScreen/Index'


export default function App() {
  return (
    <NavigationContainer>
      {/* <LogIn /> */}
      {/* <SignUp /> */}
      {/* <ForgetPassword /> */}
      <LogInStack />
      {/* <OTP /> */}
      </NavigationContainer>
  )
}