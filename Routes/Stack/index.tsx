import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { propsNavigationStack } from "./Models";

import Home     from "../../Screens/Home";
import Login    from "../../Screens/Login";
import Cadastro from "../../Screens/Cadastro";
import Pacote   from "../../Screens/Pacote";
import Perfil   from "../../Screens/Perfil";
import Menu     from "../../Screens/Menu";

const { Navigator, Screen } = createStackNavigator<propsNavigationStack>();

export default function() {
    return (
        <Navigator initialRouteName="Login" screenOptions={{ headerShown:false }}>
            <Screen name="Home"     component={Home} />
            <Screen name="Login"    component={ Login } />
            <Screen name="Cadastro" component={ Cadastro } />
            <Screen name="Pacote"   component={ Pacote } />
            <Screen name="Perfil"   component={ Perfil } />
            <Screen name="Menu"     component={ Menu } />
        </Navigator>
    )
}