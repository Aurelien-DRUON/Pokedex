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
                <Text>
                    {generation.generation}ème génération
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 5,
    },
    button: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    },
});
