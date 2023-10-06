import { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import PokemonItem from "../components/PokemonItem";
import { useNavigation } from "@react-navigation/native";

export default function GenerationScreen({ route }) {
  const { nb } = route.params;
  const [generation, setGeneration] = useState([]);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: nb + "ème génération"
    })
  });

  const getGen = () => {
    fetch('https://api-pokemon-fr.vercel.app/api/v1/gen/' + nb)
      .then((response) => { return response.json() })
      .then((generation) => {
        setGeneration(generation);
      });
  }

  useEffect(() => {
    getGen();
  });

  return (
    <View>
      <FlatList
        data={generation}
        numColumns={3}
        renderItem={({ item }) => <PokemonItem pokemon={item} />}>
      </FlatList>
    </View>
  )
};