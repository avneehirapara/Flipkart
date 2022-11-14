import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';



export const home = ({navigation}) => {
  return (
    <View style={styles.container}>
            <View>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        < Ionicons name='ios-chevron-back' style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
  )
}