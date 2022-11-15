import { StyleSheet } from "react-native"
import { colors } from "../../Theme/Color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    },
    backIcon: {
        position:'absolute',
        left:0,
        fontSize: 30,
        color: 'black',
      },
    head:{
        color:'#3498DB',
        fontSize:20,
        letterSpacing:2,
        fontWeight:"700",
        marginBottom:20,
        marginTop:60,
        textAlign:'center'
    },

    EmailBox: {
        flexDirection: 'row',
        height: 50,
        width: 350,
        borderRadius: 10,
        marginTop: 57,
        alignSelf: 'center',
        borderBottomWidth: 1
    },
    InputIcon: {
        marginRight: 9,
        marginLeft: 20,
        marginTop: 16,
        marginBottom: 11,
        fontSize: 20,
        color: colors.black
    },
    TextInput: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 17,
        alignSelf: 'center',
        width: 300,
    },
    SubmitButton: {
        height: 50,
        width: 250,
        backgroundColor: colors.blue,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 61,

    },
    SubmitText: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 20,
        color: 'white',
        fontFamily: 'Montserrat-SemiBold'
    },

})

export default styles