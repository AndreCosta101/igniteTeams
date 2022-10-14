import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { Input } from "../../components/Input";
import { Container, Content, Icon } from "./styles";

import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
    const navigation = useNavigation();

    function navigateToPlayers(){
        navigation.navigate('players', { group: 'Rocket'});
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
