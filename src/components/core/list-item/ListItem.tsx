import React,{  FunctionComponent } from "react";
import { useColorScheme } from "react-native";
import { View, Text, Image } from "react-native";
import {ListItemStyle} from './ListItem.style';

interface ListItemProps{
    title:string,
    date:string,
    snippet:string,
    imageUrl:string
}

export const ListItem:FunctionComponent<ListItemProps>=({
    title,
    date,
    snippet,
    imageUrl
})=>{
    const isDarkMode = useColorScheme() === 'dark';
    const styles = ListItemStyle(isDarkMode)
    return(
        <View style={styles.viewContainer}>
            <Image style={styles.thumbnail} source={{uri:imageUrl}} />
            <View style={styles.contentStyle}>
                <Text numberOfLines={2} style={styles.titleStyle}>{title}</Text>
                <Text  style={styles.snippetStyle}>{snippet}</Text>
                <Text  style={styles.dateStyle}>{date}</Text>
            </View>

        </View>
    )
}