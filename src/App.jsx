import { styled } from "styled-components";
import "./App.css";

const Container = styled.div`
  width: calc(100% - 220px);
  max-width: 1060px;
  margin: 70px auto;
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
`;

function App() {
  return <Container><h1>Task List</h1></Container>;
}

export default App;
