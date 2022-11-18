import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
  container: {
    // margin: 16,
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    fontSize: 30,
    color: 'black',
    marginTop: 10,
  },
  TOPhIcon: {
    fontSize: 25,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 10,
  },

  BIGBox: {
    marginTop: 15,

  },
  mainBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 3,
    marginTop: 5,
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  bIcon: {
    right: 50,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingTop: 5,

  },
  bText: {
    right: 40,
    fontSize: 20,
    paddingBottom: 5,
    paddingRight: 50,
    paddingTop: 5,

  },

  ColorBox: {
    marginTop: 20,
    backgroundColor: '#D0D3D4',
    height: 10,
    width: '100%'
  },

  CreditText: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: 15,
    marginBottom:30,
  },
  CIcon: {
    marginLeft: 15,
    marginTop: 13
  },
  Ctext: {
    marginLeft: 20,
    marginTop: 10,
    fontSize:16,
    color:'black',
    fontWeight:'300'
  },
  C1Text:{
  marginLeft:60
  },

 
})
export default styles