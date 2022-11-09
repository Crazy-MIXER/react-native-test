import { Modal, View, Image, Text, TouchableHighlight, StyleSheet } from "react-native";
import { usersDataProps } from "./globalHooks";

interface modalProps {
    backTap(): void
    visible: boolean
    item: usersDataProps
}

export function ModalInformation({ backTap, visible, item }: modalProps) {
    const photo = { uri: item.picture.large }
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}
            onRequestClose={backTap}
        >
            <View style={styles.centeredContainer}>
                <View style={styles.modalContainer}>
                    <Image
                        style={styles.image}
                        source={photo}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.nameText}>{item.name.first} {item.name.last}</Text>
                        <Text style={styles.defaultText}>Country: {item.location.country}</Text>
                        <Text style={styles.defaultText}>City: {item.location.city}</Text>
                    </View>
                    <Text style={styles.emailText}>Email: {item.email}</Text>
                    <TouchableHighlight
                        onPress={backTap}
                        style={{ borderRadius: 100 }}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Back</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: '78%',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#63E8F0',
        borderWidth: 2
    },
    image: {
        width: 115,
        height: 115,
        alignSelf: 'center',
        borderRadius: 100,
        borderColor: 'silver',
        borderWidth: 1.5
    },
    textContainer: {
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 40,
        paddingVertical: 12,
        paddingHorizontal: 10
    },
    nameText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20
    },
    defaultText: {
        color: 'white',
        fontSize: 16
    },
    emailText: {
        color: 'silver'
    },
    button: {
        backgroundColor: '#2094F3',
        borderRadius: 100,
        width: 150,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '600'
    },
})