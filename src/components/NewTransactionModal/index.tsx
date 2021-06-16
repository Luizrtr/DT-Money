import Modal from 'react-modal';
import { Container } from './styles';
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from '../services/api';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

interface IFormTransacao {
  titulo: string;
  valor: number;
  categoria: string;
  data?: Date; // ? esse campo opcional

}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  //Hook Form
  const { register, handleSubmit } = useForm<IFormTransacao>();
  const onSubmit: SubmitHandler<IFormTransacao> = async data => {
    console.log(data);

    await api.get('trasinctions', { data })
    .then(response => {
      console.log(response.data);
      onRequestClose();
    })
    .catch((e) => {
      console.log(e)
    })
  };

  return(
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className= 'react-modal-content'>

      <Container onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" {...register("titulo")} />

        <input type="number"placeholder="Valor" {...register("valor")} />

        <input placeholder="Categoria" {...register("categoria")} />
        
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
