import { StyleSheet, Text, View } from "react-native";

export default function Evolve({ route }) {
    const pokemon = route.params.pokemon;

    return (
        <View>
            {pokemon.evolution.next.map((evolution) => {
                return (
                    <Text>{evolution.name} {evolution.condition}</Text>
                )
            })}
        </View>
        )
}

const styles = StyleSheet.create({

});