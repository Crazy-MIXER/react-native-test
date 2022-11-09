import { TouchableOpacity, View, Text, Image, StyleSheet, Alert } from "react-native";

import { getUsers } from "./commands";
import { useAtom } from "jotai";

import { usersState, loadingState, errorState } from "./globalHooks";


export function HeadPanel() {
  const [users, setUsers] = useAtom(usersState)
  const [, setLoading] = useAtom(loadingState)
  const [error, setError] = useAtom(errorState)
  const heart = require('./icons/heart.png')
  const refresh = require('./icons/refresh.png')

  function randomUserAlert() {
    let count = Math.ceil(Math.random() * users.length)
    Alert.alert('Случайный пользователь', `Имя: ${users[count].name.first}
Email: ${users[count].email}`, [{ text: 'OK' }])
  }

  return (
    <View style={styles.head}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={randomUserAlert}
      >
        <Image
          style={styles.icon}
          source={heart}
        />
      </TouchableOpacity>
      <Text style={{ fontWeight: '400' }}>  Users list </Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          setLoading(true)
          if (error) setError(false)
          getUsers(setUsers, setError, setLoading)
        }}
      >
        <Image
          style={styles.icon}
          source={refresh}
        />
      </TouchableOpacity>
    </View>
  )
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
});
