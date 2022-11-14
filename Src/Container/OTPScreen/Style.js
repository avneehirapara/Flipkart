import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
        margin: 16,
        flex: 1,
        padding: 5,
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
    textInputContainer: {
        marginBottom: 20,
        marginTop:50,
    },
    Jcenter:{
        justifyContent:'center',
        alignItems:'center'
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 3,
    },
    Button: {
        paddingTop: 2,
        paddingBottom: 2,
        paddingRight: 90,
        paddingLeft: 90,
        backgroundColor: "#047BD5",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 40
    },
    BText: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 20,
        color: 'white'
    },
});

export default styles