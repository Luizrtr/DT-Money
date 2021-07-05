import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './components/services/api';

interface Transaction {
    id:number;
    title:string;
    amount: number;
    type: string;
    category: string;
    createdAt:string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput ) => void;
}
// interface TransactionInput{
//     title:string;
//     amount: number;
//     type: string;
//     createdAt:string;
// }
// type TransactionInput  = Omit<Transaction, 'id' | 'creacteAt'>; // TransactionInput vai herdar todos os campos do Transaction menos os campos destacado no função 
type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;  
export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    );
 
export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
      api.get('transactions')
      .then(reponse => setTransactions(reponse.data.transactions))
    }, []);

    function createTransaction(transaction: TransactionInput){
        api.post('/transactions', transaction )
    }

    return(
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}




