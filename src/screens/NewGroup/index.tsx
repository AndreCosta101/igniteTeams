import { useState } from 'react';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { Input } from "../../components/Input";
import { Container, Content, Icon } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { createGroup } from '../../storage/group/createGroup';
import { AppError } from '../../utils/AppError';
import { Alert } from 'react-native';

export function NewGroup() {
    const [group, setGroup] = useState('');
    const navigation = useNavigation();

    async function handleNew(){
        try {
            if(group.trim().length === 0){
                return Alert.alert('Nova Turma', 'Informe o nome da turma');
            }
            
            await createGroup(group)
            navigation.navigate('players', { group}); 

        } catch (error) {
            if(error instanceof AppError){
                Alert.alert('Nova Turma', error.message);
            } else {
                Alert.alert('Nova Turma', 'Não foi possível criar um nova turma');
            }
           console.log(error) 
        }
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
                    onPress={handleNew}
                />
            </Content>
        </Container>
    );
}
