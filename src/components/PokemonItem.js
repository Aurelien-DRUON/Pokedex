import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PokemonItem({ pokemon }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Pokemon', {id: pokemon.pokedexId})}
            >
            <Image source={{uri: pokemon.sprites.regular}} style={{width: 50, height: 50}} />
            <Text>
                {pokemon.name.fr}
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