import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from "react-native";
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';



export const SignUp = ({ navigation }) => {

    return (
        <View style={styles.container}>
             <View>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        < Ionicons name='ios-chevron-back' style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.head}>Create An Account</Text>
                </View>
            </View>

            <View style={styles.Box}>
                <TextInput style={styles.TextInput}
                    placeholder='Email/Mobile no.'
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View style={styles.Box}>
                <TextInput style={styles.TextInput}
                    placeholder='Password.'
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View style={styles.Box}>
                <TextInput style={styles.TextInput}
                    placeholder='Conform Password'
                    placeholderTextColor="#003f5c"
                />
            </View>

            <TouchableOpacity>
                <View style={styles.SingUPButton}>

                    <Text style={styles.SignUpText}>Sign Up</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}