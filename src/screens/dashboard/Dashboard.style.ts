import { StatusBar, StyleSheet } from "react-native";
import { Colors } from "src/shared/Colors";

export const DashboardStyles = (darkScheme:boolean)=> StyleSheet.create({
    viewContainer:{
        height:'100%',
        paddingHorizontal:12,
        paddingBottom:StatusBar.currentHeight,
        backgroundColor:darkScheme?Colors.bgDarkColor:Colors.bgColor
    },
    menuIcon:{
        width:24,
        height:24
    }
});