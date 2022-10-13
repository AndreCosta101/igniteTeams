import { useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '../../components/Header';
import { HighLight } from '../../components/HighLight';
import { GroupCard } from '../../components/GroupCard';
import { EmptyList } from '../../components/EmptyList';
import { Button } from '../../components/Button';

import { 
    Container, 
} from './styles';


export default function Groups() {
    const [groups, setGroups] = useState<string[]>([]);

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
      />

    </Container>
  );
}