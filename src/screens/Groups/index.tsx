import { Header } from '../../components/Header';
import { HighLight } from '../../components/HighLight';

import { 
    Container, 
  
} from './styles';


export default function Groups() {
  return (
    <Container>
      <Header showBackButton/>
      <HighLight 
        title="Turmas" 
        subTitle="Jogue com sua turma"
      />
    </Container>
  );
}