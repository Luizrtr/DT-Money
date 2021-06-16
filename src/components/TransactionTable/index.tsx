/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

interface IDados {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

export function TransactionTable(){
  const [dados, setDados] = useState<IDados[]>();

  useEffect(() =>{
    api.get('trasinctions')
      .then(response => {
        const info = JSON.stringify(response.data[0]);
        console.log(info)
        setDados(response.data[0])
      })
  },[]);


  return(
    <Container>
        {dados ?
          (<table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>            
              </tr>
            </thead>
            <tbody>
              {dados && dados.map(transaction => {
                <tr key={transaction.id}>
                  <td className="title">{transaction.title}</td>
                  <td className="deposit">{transaction.amount}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.type}</td>
                </tr>
              })}
            </tbody>
          </table>
         ) : (<p>Carregando...</p>) }
    </Container>
  )
}