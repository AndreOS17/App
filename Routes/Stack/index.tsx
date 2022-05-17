import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { propsNavigationStack } from "./Models";

import Home     from "../../Screens/Home";
import Login    from "../../Screens/Login";
import Cadastro from "../../Screens/Cadastro";
import Pacote   from "../../Screens/Pacote";
import Perfil   from "../../Screens/Perfil";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export default function() {
    return (
        <Navigator initialRouteName="Home" screenOptions={{ headerShown:false }}>
            <Screen name="Home"     component={Home} />
            <Screen name="Login"    component={ Login } />
            <Screen name="Cadastro" component={ Cadastro } />
            <Screen name="Pacote"   component={ Pacote } />
            <Screen name="Perfil"   component={ Perfil } />
        </Navigator>
    )
}