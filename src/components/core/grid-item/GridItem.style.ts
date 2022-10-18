import { ColorSchemeName } from "react-native";
import { StyleSheet } from "react-native";
import { Colors } from "src/shared/Colors";

export const GridItemStyle = (darkScheme:boolean) => StyleSheet.create({
  viewContainer:{
    flexDirection:'column',
    alignItems:'flex-start',
    width:'100%',
    height:220,
    marginBottom:6,
  },
  thumbnail:{
    width:'100%',
    height:140,
    marginEnd:12,
  },
  titleStyle:{
    fontSize:12,
    lineHeight:15,
    color:darkScheme?Colors.white:Colors.black,
    fontWeight:'500',
    marginTop:4,
  },
  snippetStyle:{
    fontSize:10,
    lineHeight:12,
    color:darkScheme?Colors.white:Colors.black,
    fontWeight:'500',
    marginTop:4,
  },
  dateStyle:{
    fontSize:9,
    lineHeight:11,
    color:darkScheme?Colors.white:Colors.black,
    fontWeight:'400',
    marginTop:4,
  },
  contentStyle:{
    flex:1
  }

})