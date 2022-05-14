import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import { propsNavigationStack } from "./Models";

import Login from "../../Screens/Login";
import Cadastro from "../../Screens/Cadastro";
import Pacote from "../../Screens/Pacote";
import Perfil from "../../Screens/Perfil";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export default function() {
    return (
        <Navigator initialRouteName="Login" screenOptions={{ headerShown:false }}>
            <Screen name="Login"    component={ Login } />
            <Screen name="Cadastro" component={ Cadastro } />
            <Screen name="Pacote"   component={ Pacote } />
            <Screen name="Perfil"   component={ Perfil } />
        </Navigator>
    )
}