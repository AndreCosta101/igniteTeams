import { TextInputProps } from 'react-native';
import {useTheme} from 'styled-components/native'

import { Container } from './styles';


export function Input({...rest}: TextInputProps){
    const theme = useTheme();

    return (
        <Container 
            placeholder={theme.COLORS.GRAY_100}
            {...rest} 
        />
    );
}