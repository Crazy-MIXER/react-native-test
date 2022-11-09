import { useEffect, useState } from "react";
import { Text, StyleSheet, ActivityIndicator, FlatList, View } from 'react-native'
import { useAtom } from "jotai";

import { UserItem } from "./userItem";
import { getUsers } from "./commands";
import { usersState, loadingState, errorState } from "./globalHooks";

export function UserList() {
  const [users, setUsers] = useAtom(usersState)
  const [loading, setLoading] = useAtom(loadingState)
  const [error, setError] = useAtom(errorState)
  const [refresh, setRefresh] = useState(false)

  async function updateData() {
    setRefresh(true)
    getUsers(setUsers, setError, setRefresh)
  }

  useEffect(() => {
    getUsers(setUsers, setError, setLoading)
  }, [])

  if (error)
    return <Text style={styles.errorMsg}> Unable to connect to the server. </Text>

  if (loading)
    return <ActivityIndicator size='large' color='#00ff00' style={{ marginTop: 15 }} />

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: '#F9F9F9' }}
      data={users}
      renderItem={({ item }) => <UserItem {...{ item }} />}
      refreshing={refresh}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onRefresh={updateData}
    />
  )
}

const styles = StyleSheet.create({
  errorMsg: {
    color: '#ee8888',
    fontSize: 20,
    padding: 24,
    textAlign: 'center'
  },
  separator: {
    width: '85%',
    alignSelf: 'flex-end',
    borderTopWidth: 0.5,
    borderColor: 'silver'
  }
});
