/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

export function TransactionTable(){

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
          <tr>
            <td className="title">Aluguel</td>
            <td className="deposit">1000</td>
            <td>Casa</td>
            <td>19/06/2021</td>
          </tr>
        </tbody>
      </table>      
    </Container>
  )
}