import React,{  FunctionComponent } from "react";
import { useColorScheme } from "react-native";
import { View, Text, Image } from "react-native";
import {ListItemStyle} from './ListItem.style';
/**
 * @type for list item widget
 */
interface ListItemProps{
    title:string,
    date:string,
    snippet:string,
    imageUrl:string
}
/**
 * 
 * @param param0 title,date,snippet,imageUrl
 * @returns ListItem Wigdet
 */
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
            <Image testID={'thumbnailImg'} style={styles.thumbnail} source={{uri:imageUrl}} />
            <View style={styles.contentStyle}>
                <Text testID={'titleTxt'} numberOfLines={2} style={styles.titleStyle}>{title}</Text>
                <Text testID={'snippetTxt'} style={styles.snippetStyle}>{snippet}</Text>
                <Text testID={'dateTxt'} style={styles.dateStyle}>{date}</Text>
            </View>

        </View>
    )
}