import { Header } from "./components/Header";
import styled from 'styled-components'
import {GlobalStyle} from "./styles/global";
import { Dashboard } from "./components/Dashboard";

const Title = styled.h1` //styledcomponents

`

function App() {
  return (
    <>

      <Header />
      <Dashboard />
      <GlobalStyle />
      
    </>
  );
}

export default App;
 