import React, { useEffect, useLayoutEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../assets/colors";
import { useNavigation } from "@react-navigation/native";


export default function PokemonScreen({ route }) {
    const { id } = route.params;
    const [pokemon, setPokemon] = useState(null);
    const [color, setColor] = useState(colors.Normal);
    const [color2, setColor2] = useState(colors.Normal);

    const navigation = useNavigation();

    useLayoutEffect(() => {
        if (pokemon != null)
            navigation.setOptions({
                title: pokemon.name.fr
            })
    }, pokemon);

    const getPokemon = () => {
        fetch('https://api-pokemon-fr.vercel.app/api/v1/pokemon/' + id)
            .then((response) => response.json())
            .then((pokemonData) => {
                setPokemon(pokemonData);
            });
    }

    const getColor = () => {
        setColor(colors[pokemon.types[0].name]);
        if(pokemon.types.length>1) {
            setColor2(colors[pokemon.types[1].name]);
        }else {
            setColor2(colors[pokemon.types[0].name]);
        }
    }

    useEffect(() => {
        getPokemon();
    }, []);

    useEffect(() => {
        if (pokemon != null)
            getColor();
    }, pokemon);

    if (!pokemon) {
        return (
            <View>
                <Text>Chargement...</Text>
            </View>
        );
    }
    return (
        <View>
            <ScrollView>
                <View style={[styles.sprites, { borderColor: color2 }]}>
                    <View style={[styles.spritecontainer, { borderColor: color }]}>
                        <Text style={[styles.spriteName, { backgroundColor: color }]}>Classique</Text>
                        <Image source={{ uri: pokemon.sprites.regular }} style={styles.sprite} />
                    </View>
                    <View style={[styles.spritecontainer, { borderColor: color }]}>
                        <Text style={[styles.spriteName, { backgroundColor: color }]}>Chromatique</Text>
                        <Image source={{ uri: pokemon.sprites.shiny }} style={styles.sprite} />
                    </View>
                </View>
                <View>
                    <Text style={[styles.text, { backgroundColor: color }, { borderColor: color2 }]}>{pokemon.name.fr}</Text>
                    <Text style={[styles.text, { backgroundColor: color }, { borderColor: color2 }]}>Pokémon n°{pokemon.pokedexId}</Text>
                    <Text style={[styles.text, { backgroundColor: color }, { borderColor: color2 }]}>{pokemon.category}</Text>
                    <View style={[styles.types, { borderColor: color2 }]}>
                        <Text style={[styles.typetext, { backgroundColor: color }, { borderColor: color2 }]}>Type</Text>
                        {pokemon.types.map((type) => (
                            <Image source={{ uri: type.image }} style={styles.type} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    sprites: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
    },
    spritecontainer: {
        borderWidth: 1,
        alignItems: 'center',
    },
    spriteName: {
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sprite: {
        width: '50%',
        aspectRatio: 1,
    },
    types: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
    },
    type: {
        width: 50,
        height: 50,
        marginLeft: 5,
        marginRight: 5,
    },
    typetext : {
        height: '100%',
        textAlignVertical: 'center',
        borderRightWidth: 2,
    },
    text: {
        borderBottomWidth: 2,
        height: 50,
        textAlignVertical: 'center',
        paddingLeft: 5,
    }
});