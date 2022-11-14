import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
      margin:16,
      flex:1
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
    backIcon: {
      position:'absolute',
      left:0,
      fontSize: 30,
      color: 'black',
    },
      Box: {
        flexDirection: 'row',
        height: 50,
        width: 350,
        marginTop: 50,
        alignSelf: 'center',
        borderBottomWidth: 1
      },
      TextInput: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 17,
        alignSelf: 'center',
        width: 300,
      },
      SingUPButton: {
        paddingTop: 2,
        paddingBottom:2,
        paddingRight: 90,
        paddingLeft: 90,
        backgroundColor: "#047BD5",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius:10,
        marginTop:40
      },
      SignUpText: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 20,
        color: 'white'
      },

})


export default styles;