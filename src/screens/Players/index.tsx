
import { Header } from '../../components/Header';
import { HighLight } from '../../components/HighLight';
import { Container } from './styles';

export function Players() {
  return (
    <Container>
      <Header showBackButton/>

        <HighLight
            title="Nome da turma"
            subTitle="adicione as pessoas"
        />
    </Container>
  );
}