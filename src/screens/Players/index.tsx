import React, { useState } from 'react';
import { useRoute} from '@react-navigation/native';
import { FlatList } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { Filter } from '../../components/Filter';
import { HighLight } from '../../components/HighLight';
import { Input } from '../../components/Input';
import { PlayerCard } from '../../components/PlayerCard';
import { EmptyList } from '../../components/EmptyList';
import { Button } from '../../components/Button';

import { Container, Form, HeaderList, PlayersQuantity } from './styles';

type RouteParams = {
    group: string;
}

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  return (
    <Container>
      <Header showBackButton/>

        <HighLight
            title={group}
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
          <PlayersQuantity>
              {players.length}
          </PlayersQuantity>
        </HeaderList> 

        <FlatList
          data={players}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <PlayerCard 
              name={item}
              onRemove={() => {}} 
            />
          )}
          ListEmptyComponent={() => (
            <EmptyList
              message="Não há pessoas nesse time"
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 }
          ]}     
        />

        <Button
          title="Remover Turma"
          type='SECONDARY'
          onPress={() => {}}
        />

    </Container>
  );
}