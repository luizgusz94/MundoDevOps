import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ContentMain: {
    alignItems: 'center',       
    width: "100%",
    height: "100%",
},

  Card:{
    justifyContent: 'center',   
    borderRadius: 10,
    width: "90%", 
    height: 110,
    backgroundColor:"#323C47",
    top: -5,
    marginTop: 28
  },

  Circle:{    
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',              
    left: 15,
    width: 85,
    height: 85,
    backgroundColor: "#262F38"
  },



  GeneralInfo:{
    left:"45%",
    position:"absolute",
    justifyContent: 'center',
    width: "100%", 
  },

  TitleView:{
    top: 8,    
    width: "100%",
    height:100,

  },

  Title:{
    color:"#FFF",
    fontSize: 21, 
    fontFamily: "Montserrant ExtraBold"   
  },

  PainelInfo:{
    position:"absolute",
    justifyContent: 'center',  
    alignItems: 'center',     
    flexDirection:"row",
  },

  PainelInfoText:{    
    color:"#FFF",
    marginLeft: 4,
    top:3,
    fontSize: 8, 
    borderRightWidth: 0.5,
    borderRightColor: "#262F38"    
  },

  PainelInfoTextWithoutLine:{   
    color:"#FFF",     
    marginLeft: 4,
    top:3,
    marginLeft:4,
    fontSize: 8, 
  },

  PainelInfoImgs:{
    top:3,
    marginLeft: 8
  },

  TodayNormal:{
    flexDirection:"row",
    top:70,
    position:"absolute",
    borderRadius:10,
    justifyContent: 'center',  
    alignItems: 'center', 
    borderColor:"#c0c1c3",
    borderWidth:0.5,
    width: 50,
    height:14,
  },

  TodayOrange:{
    flexDirection:"row",
    top:70,
    position:"absolute",
    borderRadius:10,
    justifyContent: 'center',  
    alignItems: 'center', 
    borderColor:"#fd3c29",
    backgroundColor:'#fd3c29',
    borderWidth:0.5,
    width: 50,
    height:14,
  },

  Text:{
    fontFamily:"Montserrant Thin",
    fontSize: 8, 
    color:"#FFF"
  },

  YesterdayNormal:{
    flexDirection:"row",
    left: 60,
    top:70,
    position:"absolute",
    borderRadius:10,
    justifyContent: 'center',  
    alignItems: 'center', 
    borderColor:"#c0c1c3",
    borderWidth:0.5,
    width: 50,
    height:14,    
  },

  YesterdayGreen:{
    flexDirection:"row",
    left: 60,
    top:70,
    position:"absolute",
    borderRadius:10,
    justifyContent: 'center',  
    alignItems: 'center', 
    borderColor:"#2bd1ad",
    backgroundColor:"#2bd1ad",
    borderWidth:0.5,
    width: 50,
    height:14,    
  },


});

export default styles;