import { StatusBar, StyleSheet } from "react-native";
import { Colors } from "src/shared/Colors";

export const DashboardStyles = StyleSheet.create({
    viewContainer:{
        height:'100%',
        paddingHorizontal:12,
        paddingBottom:StatusBar.currentHeight,
        backgroundColor:Colors.bgColor
    },
    menuIcon:{
        width:24,
        height:24
    }
});