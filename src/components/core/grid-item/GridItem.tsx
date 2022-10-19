import React,{  FunctionComponent } from "react";
import { View, Text, Image, useColorScheme } from "react-native";
import {GridItemStyle} from './GridItem.style';
/**
 * @type for grid item widget
 */
interface GridItemProps{
    title:string,
    date:string,
    snippet:string,
    imageUrl:string
}
/**
 * 
 * @param param0 title,date,snippet,imageUrl
 * @returns GridItem Wigdet
 */
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
            <Image testID={'thumbnailImg'} style={styles.thumbnail} source={{uri:imageUrl}} />
            <View style={styles.contentStyle}>
                <Text testID={'titleTxt'} numberOfLines={2} style={styles.titleStyle}>{title}</Text>
                <Text testID={'snippetTxt'} style={styles.snippetStyle}>{snippet}</Text>
                <Text testID={'dateTxt'} style={styles.dateStyle}>{date}</Text>
            </View>

        </View>
    )
}