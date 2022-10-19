import React,{ Children, FunctionComponent, ReactNode } from "react";
import { View,Text, TouchableOpacity, useColorScheme } from "react-native";
import {HeaderStyle} from './Header.style';

interface HeaderProps{
    title:string,
    actionPressed?:()=>void,
    children:ReactNode
}

export const Header:FunctionComponent<HeaderProps>=({
    title,
    actionPressed = ()=>{},
    children
})=>{
    const isDarkMode = useColorScheme() === 'dark'
    const styles = HeaderStyle(isDarkMode)
    return(
        <View style={styles.headerContainer}>
            <View style={styles.menuContainer}/>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>{title}</Text>
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={actionPressed}>
                    {
                        children
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}