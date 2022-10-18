import React,{  FunctionComponent } from "react";
import { View, Text, Image, useColorScheme } from "react-native";
import {GridItemStyle} from './GridItem.style';

interface GridItemProps{
    title:string,
    date:string,
    snippet:string,
    imageUrl:string
}

export const GridItem:FunctionComponent<GridItemProps>=({
    title,
    date,
    snippet,
    imageUrl
})=>{
    const isDarkMode = useColorScheme() === 'dark';
    const styles = GridItemStyle(isDarkMode)
    return(
        <View style={styles.viewContainer}>
            <Image style={styles.thumbnail} source={{uri:imageUrl}} />
            <View style={styles.contentStyle}>
                <Text numberOfLines={2} style={styles.titleStyle}>{title}</Text>
                <Text style={styles.snippetStyle}>{snippet}</Text>
                <Text style={styles.dateStyle}>{date}</Text>
            </View>

        </View>
    )
}