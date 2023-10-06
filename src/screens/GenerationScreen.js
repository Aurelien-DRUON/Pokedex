import { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, View } from "react-native";
import PokemonItem from "../components/PokemonItem";
import { useNavigation } from "@react-navigation/native";

export default function GenerationScreen({ route }) {
  const { nb } = route.params;
  const [generation, setGeneration] = useState([]);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: nb == 1
        ? `${nb}ère génération`
        : `${nb}ème génération`
    });
  }, [generation.generation]);
  

  const getGen = () => {
    fetch('https://api-pokemon-fr.vercel.app/api/v1/gen/' + nb)
      .then((response) => { return response.json() })
      .then((generation) => {
        setGeneration(generation);
      });
  }

  useEffect(() => {
    getGen();
  }, []);

  return (
    <View>
      <FlatList
        data={generation}
        renderItem={({ item }) => <PokemonItem pokemon={item} />}>
      </FlatList>
    </View>
  )
};