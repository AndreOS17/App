import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface HomeProps {
    user: {
        username: string;
        password: string;
    };
}

interface PerfilProps {
    username: string;
}

export type propsNavigationStack = {
    Home: HomeProps;
    Login: undefined;
    Cadastro: undefined;
    Pacote: undefined;
    Perfil: PerfilProps;
    Menu: undefined;
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;