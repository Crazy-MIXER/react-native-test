import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

interface userProps {
  email: string
  name: {
    first: string
    last: string
    title: string
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  phone: string
  location: {
    city: string
    country: string
  }
}

const UserItem = (props: userProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => { }}
    >
      <View style={styles.item}>
        <View style={{ width: '60%' }}>
          <Text style={{ fontSize: 20 }}> {props.name.title} {props.name.first} {props.name.last} </Text>
          <Text style={{ fontSize: 17, color: 'silver' }}> {props.email} </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

function UserList() {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [error, setError] = useState(false);

  async function getUsers() {
    try {
      const usersData = await fetch('https://randomuser.me/api/?results=5')
        .then((response) => response.json())
      setUsers(usersData.results)
    }
    catch (err) {
      setError(true)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  if (error)
    return <Text style={styles.errorMsg}> Unable to connect to the server. </Text>

  if (loading)
    return <ActivityIndicator size='large' color='#00ff00' style={{ marginTop: 15 }} />

  return (
    <FlatList
      style={{ flex: 1 }}
      data={users}
      renderItem={({ item }:any) => <UserItem {...item} />}
    />
  )
}

export default function App() {
  const heart = require('./components/icons/heart.png')
  const refresh = require('./components/icons/refresh.png')

  return (
    <View style={styles.header}>
      <View style={styles.head}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => { }}
        >
          <Image
            style={styles.icon}
            source={heart}
          />
        </TouchableOpacity>
        <Text style={{ fontWeight: '400' }}>  Users list </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => { }}
        >
          <Image
            style={styles.icon}
            source={refresh}
          />
        </TouchableOpacity>
      </View>
      <UserList />
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
  },
  item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: '#C5E1F1',
    width: '100%'
  },
  errorMsg: {
    color: '#ee8888',
    fontSize: 20,
    padding: 24,
    textAlign: 'center'
  },
});
