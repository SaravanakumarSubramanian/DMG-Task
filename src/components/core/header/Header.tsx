import React,{ Children, FunctionComponent, ReactNode } from "react";
import { View,Text, TouchableOpacity } from "react-native";
import {HeaderStyle} from './Header.style';

interface HeaderProps{
    title:string,
    actionPressed?:()=>void,
    children:ReactNode
}
const {
    headerContainer,
    menuContainer,
    titleContainer,
    titleStyle
} = HeaderStyle;
export const Header:FunctionComponent<HeaderProps>=({
    title,
    actionPressed = ()=>{},
    children
})=>{
    return(
        <View style={headerContainer}>
            <View style={menuContainer}/>
            <View style={titleContainer}>
                <Text style={titleStyle}>{title}</Text>
            </View>
            <View style={menuContainer}>
                <TouchableOpacity onPress={actionPressed}>
                    {
                        children
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}