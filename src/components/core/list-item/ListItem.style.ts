import { StyleSheet } from "react-native";
import { Colors } from "src/shared/Colors";

export const ListItemStyle = (darkScheme:boolean)=> StyleSheet.create({
  viewContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    height:110,
  },
  thumbnail:{
    width:100,
    height:80,
    marginEnd:12,
  },
  titleStyle:{
    fontSize:12,
    lineHeight:15,
    marginTop:4,
    color:darkScheme?Colors.white:Colors.black,
    fontWeight:'500'
  },
  snippetStyle:{
    fontSize:10,
    lineHeight:12,
    marginTop:4,
    fontWeight:'500',
    color:darkScheme?Colors.white:Colors.black,
  },
  dateStyle:{
    fontSize:9,
    lineHeight:11,
    marginTop:4,
    fontWeight:'200',
    color:darkScheme?Colors.white:Colors.black,
  },
  contentStyle:{
    flex:1
  }

})