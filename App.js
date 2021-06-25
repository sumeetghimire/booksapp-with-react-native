import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {BookDetail,reading} from "./screens/";
import audiobook  from './screens/audiobook';



import Tabs from "./navigation/tabs";



const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />
               

                {/* Screens */}
                <Stack.Screen name="reading" component={reading} options={{ headerShown: false }} />
                <Stack.Screen name="audiobook" component={audiobook} options={{ headerShown: false }} />
                <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;