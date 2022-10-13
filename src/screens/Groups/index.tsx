import { useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '../../components/Header';
import { HighLight } from '../../components/HighLight';
import { GroupCard } from '../../components/GroupCard';
import { EmptyList } from '../../components/EmptyList';
import { Button } from '../../components/Button';

import { useNavigation } from '@react-navigation/native';

import { 
    Container, 
} from './styles';


export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function navigateToNewGroup(){
      navigation.navigate('new');
  }

  return (
    <Container>
      <Header/>
      <HighLight 
        title="Turmas" 
        subTitle="Jogue com sua turma"
      />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
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
      <Button 
        title={"Criar nova turma"}
        onPress={navigateToNewGroup}
      />

    </Container>
  );
}