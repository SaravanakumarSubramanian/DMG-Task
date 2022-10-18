import React, { FunctionComponent, useState } from 'react';
import { useEffect } from 'react';
import {View, Image, FlatList, ActivityIndicator} from 'react-native';
import { useDashboard } from 'src/hooks/useDashboard';
import { Header } from 'src/components/core';
import { DashboardStyles } from './Dashboard.style';
import { ListItem,GridItem } from 'src/components/core';
import { IMAGE_ENDPOINT } from 'src/services/ApiConstants';


export interface DashboardProps{

}
const {
  viewContainer,
  menuIcon
} = DashboardStyles
export const Dashboard:FunctionComponent<DashboardProps>=()=>{
  const [toggleList,setToggleList] = useState(false);
  const [pageNumber,setPageNumber] = useState(0);

  const {fetchDashboard, isLoading, data, error} = useDashboard();
  
  useEffect(()=>{
      fetchDashboard({page:pageNumber})
  },[])

  const onEndReached=()=>{
    setPageNumber(pageNumber+1)
    fetchDashboard({page:pageNumber})
  }

  return(

    <View style={viewContainer}>
      <Header title='Dashboard' actionPressed={()=>setToggleList(!toggleList)}>
        {
          toggleList?
          <Image style={menuIcon} source={require('src/assets/ic_grid.png')}/>
          :
          <Image style={menuIcon} source={require('src/assets/ic_list.png')}/>
        }
      </Header>
      <View >
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          onEndReachedThreshold={.5}
          onEndReached={onEndReached}
          ListFooterComponent={
            isLoading?
            <ActivityIndicator animating size={'large'} color='black' />:
            null
            
          }
          renderItem={({item})=>
          
            toggleList?
            <ListItem 
              date={item.pub_date} 
              title={item.headline.main} 
              snippet={item.snippet} 
              imageUrl={item.multimedia.length>0?`${IMAGE_ENDPOINT}${item.multimedia[0].url}`:''} 
            />:
            <GridItem
              date={item.pub_date} 
              title={item.headline.main} 
              snippet={item.snippet} 
              imageUrl={item.multimedia.length>0?`${IMAGE_ENDPOINT}${item.multimedia[0].url}`:''} 
            />
          
          }
        />
      </View>

    </View>
  )
}