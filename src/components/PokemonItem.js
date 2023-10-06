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
    }, [pokemon]);

    return (
        <View style={[styles.container, { backgroundColor: color+'aa' }]}>
            <Pressable onPress={() => navigation.navigate('Pokemon', { pokemon: pokemon})}>
                <View style={styles.button}>
                    <View>
                        <Text style={styles.id}>
                            #{pokemon.pokedexId}
                        </Text>
                        <Text style={styles.name}>
                            {pokemon.name.fr}
                        </Text>
                        <View style={styles.view}>
                            {pokemon.types.map((type) => {
                                const typeColor = colors[type.name];
                                return <Text style={[styles.type, {backgroundColor : typeColor}]} key={type.name}>{type.name}</Text>
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
        marginVertical: 10,
        marginHorizontal: 15,
        height: 125,
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
    id: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'gainsboro',
    },
    image: {
        width: 100,
        aspectRatio: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    type : {
        fontWeight: 'bold',
        color: 'white',
        width: 75,
        borderRadius: 10,
        paddingHorizontal: 3,
        paddingVertical: 2,
        marginRight: 10,
        textAlign: 'center',
    },
    view : {
        flexDirection: 'row',
        borderRadius: 10,
    }
});