import { useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '../../components/Header';
import { HighLight } from '../../components/HighLight';
import { GroupCard } from '../../components/GroupCard';

import { 
    Container, 
} from './styles';


export default function Groups() {
    const [groups, setGroups] = useState<string[]>(['RocketSeat','AMigos', 'Xe']);

  return (
    <Container>
      <Header showBackButton/>
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
      />

    </Container>
  );
}