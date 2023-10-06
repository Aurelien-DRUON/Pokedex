import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../assets/colors";

export default function About({ route }) {
    const pokemon = route.params.pokemon;
    const [color, setColor] = useState(colors.Normal);
    const [color2, setColor2] = useState(colors.Normal);

    const getColor = () => {
        setColor(colors[pokemon.types[0].name]);
        if(pokemon.types.length>1) {
            setColor2(colors[pokemon.types[1].name]);
        }else {
            setColor2(colors[pokemon.types[0].name]);
        }
    }

    useEffect(() => {
        //getPokemon();
    }, []);

    useEffect(() => {
        if (pokemon != null)
            getColor();
    }, [pokemon]);

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
                            <Image source={{ uri: type.image }} style={styles.type} key={type.name}/>
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
        width: 40,
        aspectRatio: 1,
        margin: 5,
    },
    typetext : {
        height: '100%',
        width: 75,
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