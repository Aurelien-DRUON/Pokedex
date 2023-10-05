import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
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
      <ScrollView>
        {generations.map((generation) => {
          return (<GenerationItem generation={generation}/>)
        })}
      </ScrollView>
    </View>
  );
}