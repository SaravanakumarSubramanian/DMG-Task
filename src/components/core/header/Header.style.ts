import { StyleSheet } from "react-native";
import { Colors } from "src/shared/Colors";

export const HeaderStyle = (darkScheme:boolean)=> StyleSheet.create({
  headerContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    height:56
  },
  menuContainer:{
    width:'15%',
  },
  titleContainer:{
    width:'70%',
    alignItems:'center'
  },
  titleStyle:{
    fontSize:15,
    fontWeight:'bold',
    color:darkScheme?Colors.white:Colors.black
  }
})