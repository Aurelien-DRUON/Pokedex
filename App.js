import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import GenerationScreen from './src/screens/GenerationScreen';
import PokemonScreen from './src/screens/PokemonScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Accueil"
          }}
        />
        <Stack.Screen
          name="Generation"
          component={GenerationScreen}
          options={{
            title: "Pokedex"
          }}
        />
        <Stack.Screen
          name="Pokemon"
          component={PokemonScreen}
          options={{
            title: "Pokemon"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
