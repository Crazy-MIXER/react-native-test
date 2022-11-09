import { useState } from "react"
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native"

import { ModalInformation } from './modal'
import { usersDataProps } from "./globalHooks"

export const UserItem = ({ item }: { item: usersDataProps }) => {
  const arrow = require('./icons/arrow.png')
  const [modalVisible, setModalVisible] = useState(false)
  function toggleModal() {
    setModalVisible(!modalVisible)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => { setModalVisible(true) }}
    >
      <ModalInformation
        backTap={toggleModal}
        visible={modalVisible}
        item={item}
      />
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.picture.medium }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 17 }}>{item.name.first} {item.name.last}</Text>
          <Text style={styles.emailText}>{item.email}</Text>
        </View>
        <Image
          style={styles.imageArrow}
          source={arrow}
        />
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
    marginBottom: 8
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 100,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  imageArrow: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  emailText: {
    fontSize: 13,
    color: 'silver'
  }
});