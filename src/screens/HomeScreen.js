import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import GenerationItem from "../components/GenerationItem";

export default function HomeScreen() {

  const [generations, setGenerations] = useState([]);

  const getGenData = () => {
    fetch('https://api-pokemon-fr.vercel.app/api/v1/gen')
      .then((response) => { return response.json() })
      .then((generations) => {
        setGenerations(generations);
      });
  }

  useEffect(() => {
    getGenData();
  }, []);

  return (
    <View>
      <FlatList
        data={generations}
        numColumns={2}
        renderItem={({ item }) => <GenerationItem generation={item} />}
      >
      </FlatList>
    </View>
  );
}