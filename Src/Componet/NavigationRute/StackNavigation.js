import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogIn } from '../../Container/LogInScreen/Index';
import { SignUp } from '../../Container/SignUpScreen/Index';
import { ForgetPassword } from '../../Container/ForgetPasswordScreen/Index';
import { OTP } from '../../Container/OTPScreen/Index';
import { home } from '../../Container/HomeScreen/Index';

const Stack = createNativeStackNavigator();

const LogInStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LogIn" component={LogIn}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="SignUp" component={SignUp}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="OTP" component={OTP}
                options={{
                    headerShown: false,
                }} />

            <Stack.Screen name="home" component={home}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    )
}

export { LogInStack }


