import { useState } from 'react';
import { FlatList } from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { Filter } from '../../components/Filter';
import { HighLight } from '../../components/HighLight';
import { Input } from '../../components/Input';
import { Container, Form, HeaderList, PlayersNumber } from './styles';

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

  return (
    <Container>
      <Header showBackButton/>

        <HighLight
            title="Nome da turma"
            subTitle="adicione as pessoas"
        />

        <Form>
          <Input 
            placeholder='Nome da pessoa'
            autoCorrect={false}
          />
          <ButtonIcon icon="add" />
        </Form>


        <HeaderList>
          <FlatList
            data={['Time A', 'Time B', 'Time C']}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Filter 
              title={item} 
              isActive={item === team}
              onPress={() => setTeam(item)}
              />
            )}
            horizontal={true}
          />
          <PlayersNumber>
              {players.length}
          </PlayersNumber>
        </HeaderList> 

    </Container>
  );
}