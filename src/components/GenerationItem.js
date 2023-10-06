import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GenerationItem({ generation }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Generation', {nb: generation.generation})}
            >
                <Text style={styles.text}>
                    {generation.generation}ème génération
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    button: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        aspectRatio: 1,
    },
    text: {
        fontSize: 20,
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});
