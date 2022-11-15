import { StyleSheet } from "react-native"
import { colors } from '../../Theme/Color';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 16  
      },
      backIcon: {
        fontSize: 30,
        color: 'black',
        marginLeft: 5
      },
      logoImg: {
        height: 70,
        width:240,
        alignItems: "center",
        alignSelf: "center",
        marginTop:50,
        // marginBottom:10 ,
    },
      MenuIcon: {
        margin: 10,
      },
      crossIcon: {
        flex: 1,
        color: 'black',
        marginTop: 11,
        marginLeft: 341,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        fontSize: 30,
        alignSelf: 'flex-end'
      },
      wellComeBOX: {
        height: 53,
        width: 200,
        alignSelf: 'center',
        marginTop: 15,
    
      },
      welcome: {
        width: 125,
        height: 29,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.blue,
        fontSize: 24,
        marginBottom: 6,
        alignSelf: 'center'
    
      },
      EnterData: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
      },
    
      meeshoImg: {
        alignSelf: 'center',
        marginTop: 23,
    
      },
    
      MobileBox: {
        flexDirection: 'row',
        // backgroundColor: colors.secondary,
        height: 50,
        width: 350,
        borderRadius: 10,
        marginTop: 57,
        alignSelf: 'center',
        // borderWidth:1,
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
      LockBox: {
        flexDirection: 'row',
        // backgroundColor: '#D6DBDF',
        height: 50,
        width: 350,
        borderRadius: 10,
        marginTop: 57,
        alignSelf: 'center',
        marginTop: 20,
        // borderWidth:1,
        borderBottomWidth: 1
      },
      eyeIcon: {
        marginTop: 15,
        marginLeft: -30,
        marginBottom: 11,
        fontSize: 20,
        justifyContent: 'flex-end'
      },
      squarIcon: {
        marginLeft: 25,
        marginTop: 12,
        marginRight: 10,
        fontSize: 20,
        fontWeight: 'bold'       //=========font weight ===========//
      },
      Remeberme: {
        marginRight: 61,
        marginTop: 12,
        fontFamily: 'Montserrat-Regular',
      },
      Forgotpass: {
        marginLeft: 11,
        marginTop: 12,
        fontFamily: 'Montserrat-Regular',
      },
      ORbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 61
      },
      FirstBorder: {
        borderWidth: 1,
        width: '30%',
        borderColor: 'gray'
      },
      OR: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 17,
        marginRight: 10,
        marginLeft: 10,
      },
      SecondBorder: {
        borderWidth: 1,
        width: '30%',
        borderColor: 'gray'
      },
      IconsBox: {
        flexDirection: 'row',
        alignSelf: 'center'
      },
      IconsBoxes: {
        fontSize: 30,
        marginTop: 60,
        marginRight: 20,
        color:'black'
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
      SignInText: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 20,
        color: 'white'
      },
      SingUPText: {
        color: 'gray',
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
        alignSelf: 'center',
        marginTop: 10,
      },
      SingUPText1: {
        fontFamily: 'Montserrat-Regular',
        marginTop: 10,
        left: 10
      }
});

export default styles;