import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ContentMain: {
        flexDirection: "row",
        alignItems: 'center',
    },

    ContentItems: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        width: "90%",
        height: 60,
        borderBottomColor: "#575A5D",
        borderBottomWidth: 1.2,  
    },

    Title:{
        fontSize: 20,
        padding: 10,
        justifyContent: 'center',
        color:"#FEFFFF"
    },

    IconsParameters:{
        color:"#FFF",        
    }
  });

export default styles;
