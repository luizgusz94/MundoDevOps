import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ContentMain: {
        flexDirection: "row",
        alignItems: 'center',
    },

    BackgroundMenu:{        
        width: "90%",
        height: 80,
        marginTop: 12,
        borderRadius: 12,
        backgroundColor:"#3D464D", 
    },

    Tabs:{
        left: 10,
        padding:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100, 
        marginTop: 10, 
        marginLeft: 20,
        width: 50, 
        height: 50, 
        backgroundColor: "#8B10AE",
    },
});

  export default styles;