import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native';
import { HeadPanel } from './components/headPanel';

import { UserList } from './components/userList';

export default function App() {
  return (
    <View style={styles.container}>
      <HeadPanel />
      <UserList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
