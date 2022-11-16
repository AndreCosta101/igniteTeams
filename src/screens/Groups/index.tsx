import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { Header } from '../../components/Header';
import { HighLight } from '../../components/HighLight';
import { GroupCard } from '../../components/GroupCard';
import { EmptyList } from '../../components/EmptyList';
import { Button } from '../../components/Button';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { 
    Container, 
} from './styles';
import { getAllGroups } from '../../storage/group/getAllGroups';
import { Loading } from '../../components/Loading';


export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
      navigation.navigate('new');
  }

  async function fetchGroups(){
    try {
      setIsLoading(true);
      const data = await getAllGroups();
      setGroups(data);
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string){
    navigation.navigate('players', { group});
  }

  useFocusEffect(useCallback(() =>{
    fetchGroups();
  },[]));

  return (
    <Container>
      <Header/>
      <HighLight 
        title="Turmas" 
        subTitle="Jogue com sua turma"
      />

      {isLoading ? <Loading/> :
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
            onPress={() => handleOpenGroup(item)}
          />
        )} 
        contentContainerStyle={groups.length === 0 && {flex: 1} }
        ListEmptyComponent={() => (
          <EmptyList 
            message="Que tal cadastrar a primeira turma?"
          />
        )} 
        showsVerticalScrollIndicator={false}
      />
    }
      <Button 
        title={"Criar nova turma"}
        onPress={handleNewGroup}
      />


    </Container>
  );
}