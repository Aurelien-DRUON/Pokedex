import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import PokemonItem from "../components/PokemonItem";

export default function GenerationScreen({ route }) {
    const { nb } = route.params;
    const [generation, setGeneration] = useState([]);

    const getGen = () => {
      fetch('https://api-pokemon-fr.vercel.app/api/v1/gen/'+nb)
        .then((response) => { return response.json() })
        .then((generation) => {
            setGeneration(generation);
        });
    }
  
    useEffect(() => {
      getGen();
    }, []);

    return(
        <View>
        <ScrollView>
          {generation.map((pokemon) => {
            return (<PokemonItem pokemon={pokemon}/>)
          })}
        </ScrollView>
        </View>
    )
};