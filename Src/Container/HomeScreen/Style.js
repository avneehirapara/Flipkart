import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        // margin: 16,
        flex: 1,
        padding: 5,

    },
    container1: {
        backgroundColor: 'white',
        paddingTop: 10,
        flex: 1,
    },
    SearchBox: {
        flexDirection: 'row',
        height: 50,
        width:"100%",
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: '#ECF0F1',
        borderColor: '#B3B6B7'
    },
    searchIcon: {
        marginRight: 10,
        marginLeft: 30,
        marginTop: 13,
        fontSize: 20
    },
    Voice: {
        marginLeft: 90,
        marginTop: 12,
        fontSize: 22,
    },
    camera: {
        marginLeft: 10,
        marginTop: 12,
        fontSize: 22,
    },
    slider: {
        // height:250,
        width:410,
        marginTop:20,
        resizeMode: 'cover',
        // width:'100%'
    },

    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -15,
        alignSelf: 'center',
    },
    dot: {
        color: '#888',
        fontSize: 50,
    },
    activeDot: {
        color: '#FFF',
        fontSize: 50,
    },


});

export default styles