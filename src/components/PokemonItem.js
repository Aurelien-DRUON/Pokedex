import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../assets/colors';

export default function PokemonItem({ pokemon }) {
    const navigation = useNavigation();
    const [color, setColor] = useState(colors.Normal);

    const getColor = () => {
        setColor(colors[pokemon.types[0].name]);
    }

    useEffect(() => {
        if (pokemon != null)
            getColor();
    }, pokemon);

    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Pressable onPress={() => navigation.navigate('Pokemon', { id: pokemon.pokedexId })}>
                <View style={styles.button}>
                    <View>
                        <Text>
                            {pokemon.pokedexId}
                        </Text>
                        <Text>
                            {pokemon.name.fr}
                        </Text>
                        <View style={styles.view}>
                            {pokemon.types.map((type) => {
                                return <Text style={styles.type} key={type.name}>{type.name}</Text>
                            })}
                        </View>
                    </View>
                    <Image source={{ uri: pokemon.sprites.regular }} style={styles.image} />
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 5,
        height: 125,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundopacity: 0.5,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    image: {
        width: 75,
        aspectRatio: 1,
    },
    text: {
        fontSize: 20,
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    type : {
        marginHorizontal: 5,
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});