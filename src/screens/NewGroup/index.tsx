import { useState } from 'react';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { Input } from "../../components/Input";
import { Container, Content, Icon } from "./styles";

import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
    const [group, setGroup] = useState('');
    const navigation = useNavigation();

    function navigateToPlayers(){
        navigation.navigate('players', { group});
    }

    
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon/>
                <HighLight
                    title="Nova turma"
                    subTitle="crie a turma para adicionar as pessoas"
                />
                <Input 
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                />
                <Button 
                    title="Criar"
                    style={{marginTop: 20}}
                    onPress={navigateToPlayers}
                />
            </Content>
        </Container>
    );
}
