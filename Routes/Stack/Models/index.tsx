import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStack = {
    Home: undefined;
    Login: undefined;
    Cadastro: undefined;
    Pacote: undefined;
    Perfil: undefined;
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;