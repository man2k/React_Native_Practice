import React from 'react'
import { useState } from 'react'
import { View, 
Text,
TextInput,
TouchableOpacity,
Image,
FlatList } from 'react-native'

import { useRouter } from 'expo-router'
import {icons, SIZES} from "../../../constants"

import styles from './welcome.style'

const jobsTypes = ["full-time", "part-time", "Contractor"]

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Man 2k</Text>
        <Text style={styles.welcomeMessage}>Find your Perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
          value=""
          onChange={()=>{}}
          placeholder='What are you looking for' />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage} />
        </TouchableOpacity>
        </View>
        
        <View style={styles.tabsContainer}>
          <FlatList 
          data={jobsTypes} 
          renderItem={({item})=>(
            <TouchableOpacity 
            style={styles.tab(activeJobType, item)}
            onPress={()=>{
              setActiveJobType(item);
              router.push('/search/${item}')
            }}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>)}
            keyExtractor={item=>item}
            contentContainerStyle={{container: SIZES.small}}
            horizontal
           />
        </View>
      </View>
    
  )
}

export default Welcome