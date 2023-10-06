import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import About from "./tabs/About";
import Stats from "./tabs/Stats";
import Evolve from "./tabs/Evolve";

const Tab = createMaterialTopTabNavigator();

export default function PokemonTabs({route}) {
    const navigation = useNavigation();
    const pokemon = route.params.pokemon;

    useLayoutEffect(() => {
        if (pokemon != null)
            navigation.setOptions({
                title: pokemon.name.fr
            })
    }, [pokemon]);

    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="About"
                component={About}
                initialParams={{pokemon: pokemon}}
                options={{
                    title: "À propos"
                }} 
            />
            <Tab.Screen 
                name="Stats"
                component={Stats}
                initialParams={{pokemon: pokemon}}
                options={{
                    title: "Statistiques"
                }} 
            />
            <Tab.Screen 
                name="Evolve"
                component={Evolve}
                initialParams={{pokemon: pokemon}}
                options={{
                    title: "Evolutions"
                }} 
            />
        </Tab.Navigator>
    )
}