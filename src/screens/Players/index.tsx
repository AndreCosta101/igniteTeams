import React, { useState, useEffect, useRef } from 'react';
import { useRoute} from '@react-navigation/native';
import { Alert, FlatList, TextInput } from 'react-native';

import { addPlayerByGroup } from '../../storage/player/addPlayerByGroup';
import { getPlayersByGroup } from '../../storage/player/getPlayersByGroup';
import { getPlayersByGroupAndTeam } from '../../storage/player/getPlayerByGroupAndTeam';
import { PlayerStorageDTO } from '../../storage/player/PlayerStorageDTO';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { Filter } from '../../components/Filter';
import { HighLight } from '../../components/HighLight';
import { Input } from '../../components/Input';
import { PlayerCard } from '../../components/PlayerCard';
import { EmptyList } from '../../components/EmptyList';
import { Button } from '../../components/Button';

import { Container, Form, HeaderList, PlayersQuantity } from './styles';
import { AppError } from '../../utils/AppError';
import { removePlayerByGroup } from '../../storage/player/removePlayerBYGroup';



type RouteParams = {
    group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;
  const newPlayerNameInputRef = useRef<TextInput>(null)

  async function handleAddPlayer(){
    if(newPlayerName.trim().length === 0){
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa a ser adicionada')
    }
    const newPlayer = {
      name: newPlayerName,
      team
    }


    try {

      await addPlayerByGroup(newPlayer, group)

      setNewPlayerName('')
      newPlayerNameInputRef.current?.blur()
      fetchPlayersByTeam();

    } catch (error) {

      if(error instanceof AppError){
        Alert.alert('Nova pessoa', error.message);
      }else{
        console.log(error)
        Alert.alert('Nova pessoa', 'Não foi possível adicionar')
      }

    }
  }

  async function fetchPlayersByTeam(){
    try {
      const playersByTeam = await getPlayersByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado')
    }
  }

  async function handlePlayerRemove(playerName: string){
    try {
      await removePlayerByGroup(playerName, group)
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert('Remover', 'Não foi possível remover a pessoa selecionada')
    }
  }

  useEffect(()=>{
    fetchPlayersByTeam();
  }, [team])

  return (
    <Container>
      <Header showBackButton/>

        <HighLight
            title={group}
            subTitle="adicione as pessoas"
        />

        <Form>
          <Input 
            inputRef={newPlayerNameInputRef}
            value={newPlayerName}
            onChangeText ={setNewPlayerName}
            placeholder='Nome da pessoa'
            autoCorrect={false}
            onSubmitEditing={handleAddPlayer}
            returnKeyType="done"
          />
          <ButtonIcon 
            icon="add" 
            onPress={handleAddPlayer}
          />
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
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <PlayerCard 
              name={item.name}
              onRemove={() => handlePlayerRemove(item.name)} 
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