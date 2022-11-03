import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, FlatList, TouchableOpacity } from 'react-native';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item =({item}:any, {onPress}:any)=>{
  <TouchableOpacity
    onPress={onPress}
  >

  </TouchableOpacity>
}

export default function App() {
  const heart = require('./components/icons/heart.png')
  const refresh = require('./components/icons/refresh.png')

  const renderItem = ({item}:any) =>{


  }

  return (
    <View style={styles.header}>
      <View style={styles.head}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=>{}}
        >
          <Image
            style={styles.icon}
            source={heart}
          />
        </TouchableOpacity>
        <Text style={{ fontWeight: '400' }}>  Users list </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=>{}}
        >
          <Image
            style={styles.icon}
            source={refresh}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{flex:1}}
        data={DATA}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
    marginHorizontal: 20,
    resizeMode: 'stretch',
  },
  head: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D0F3FF'
  },
  header: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
});
