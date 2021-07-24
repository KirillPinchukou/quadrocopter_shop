import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity  } from 'react-native';
import { Chip } from 'react-native-paper';

export const FilterBar = ({onFilterChange, filters, activeFilter}) => {
    const renderFilter = (filter, key) => (
     <Chip
         key={key}
         onPress={() => onFilterChange(filter)}
         style={[styles.allButton, activeFilter.type === filter.type ? styles.activeFilter : null]}>
          {filter.type}
    </Chip>
    )

    return(
        <View style={styles.filtersBar}>
            {Object.keys(filters).map((filterKey, index) => renderFilter(filters[filterKey], index))}
        </View>
    )

} 
const styles = StyleSheet.create({
    filtersBar:{
        height:'8%',
        marginTop:'12%',
        width:'70%',  
        flexDirection:'row' ,
    },
    allButton: {
        alignItems: "center",
        marginRight: '6%',
        width:'24%',
        marginLeft: 16,
        backgroundColor: "#DDDDDD",
        borderRadius:12,
        justifyContent:'center',
        height:'55%'        
      },
      activeFilter: {
         backgroundColor: 'blue'
      }
})