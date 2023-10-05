import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function PokemonScreen({ route }) {
    const { id } = route.params;
    const [pokemon, setPokemon] = useState(null);

    const getPokemon = () => {
        fetch('https://api-pokemon-fr.vercel.app/api/v1/pokemon/' + id)
            .then((response) => response.json())
            .then((pokemonData) => {
                setPokemon(pokemonData);
            });
    }

    useEffect(() => {
        getPokemon();
    }, []);

    if (!pokemon) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    console.log(pokemon.name.fr);
    return (
        <View>
            <ScrollView>
                <View style={styles.sprites}>
                    <View style={styles.spritecontainer}>
                        <Text style={styles.spriteName}>Classique</Text>
                        <Image source={{ uri: pokemon.sprites.regular }} style={styles.sprite} />
                    </View>
                    <View style={styles.spritecontainer}>
                        <Text style={styles.spriteName}>Chromatique</Text>
                        <Image source={{ uri: pokemon.sprites.shiny }} style={styles.sprite} />
                    </View>
                </View>
                <Text>{pokemon.name.fr}</Text>
                <Text>Pokémon n°{pokemon.pokedexId}</Text>
                <Text>{pokemon.category}</Text>
                <View style={styles.types}>
                    <Text>Type</Text>
                    {pokemon.types.map((type) => (
                        <Image source={{ uri: type.image }} style={styles.type}/>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    sprites: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spritecontainer: {
        borderWidth: 1,
        borderColor: 'red',
        alignItems: 'center',
    },
    spriteName: {
        width: '100%',
        fontWeight: 'bold',
        backgroundColor: 'red',
        textAlign: 'center',
    },
    sprite: {
        width: 150,
        height: 150,
    },
    types: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    type: {
        width: 50,
        height: 50,
        marginLeft: 5,
        marginRight: 5,
    },
});