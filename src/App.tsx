import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { TransactionsProvider } from './TransactionsContext';
import {GlobalStyle} from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionModal';


Modal.setAppElement('#root');

export function App() {
  //modal
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>

      <Header onOpenTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />     

      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
      
    </TransactionsProvider>
  );
}

export default App;
 