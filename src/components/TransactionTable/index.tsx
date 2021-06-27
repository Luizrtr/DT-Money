/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

interface Transactions{
  id:number;
  title:string;
  amount: number;
  type: string;
  category: string;
  createdAt:string;
}

export function TransactionTable(){
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(reponse => setTransactions(reponse.data.transactions))
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>            
          </tr>
        </thead>
        <tbody>
          {transactions.map(transactions =>{
            return(
              <tr key={transactions.id}>
                <td className="title">{transactions.title}</td>
                <td className={transactions.type}>{transactions.amount}</td>
                <td>{transactions.category}</td>
                <td>{transactions.createdAt}</td>
              </tr>
            );
          })
          }
        </tbody>
      </table>      
    </Container>
  )
}