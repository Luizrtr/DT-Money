import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from '../services/api';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

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

  const [type, setType] = useState('deposit');

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

      <button type="button" onClick={onRequestClose} className="react-modal-close"><img src={closeImg} alt="Fechar modal" /></button>

      <Container onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" {...register("titulo")} />

        <input type="number"placeholder="Valor" {...register("valor")} />

        <TransactionTypeContainer>

          <RadioBox type="button" isActive={type == 'deposit'} onClick={() => { setType('deposit');}} activeColor="green">

            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          
          <RadioBox type="button" isActive={type == 'withdraw'} onClick={() => { setType('withdraw');}} activeColor="red">
            <img src={outcomeImg} alt="Saida" />
            <span>Saída</span>
          </RadioBox>


        </TransactionTypeContainer>
        

        <input placeholder="Categoria" {...register("categoria")} />
        
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
