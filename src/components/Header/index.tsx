import logoImg from '../../assets/logo.svg';
import { Container} from './styles';
import { Content } from './styles';

interface HeaderProps {
  onOpenTransactionModal: ()=> void;
}
export function Header({ onOpenTransactionModal }:HeaderProps){
  

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
        <button type="button" 
        onClick={onOpenTransactionModal}>
          Nova Transação</button>

       

      </Content>
    </Container>
  );

}