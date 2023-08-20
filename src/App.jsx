import { styled } from "styled-components";
import "./App.css";
import H1 from "./components/Typography/H1";
import Text from "./components/Typography/Text";
import Cards from "./components/Cards";

const Container = styled.div`
  width: calc(100% - 220px);
  max-width: 1060px;
  margin: 70px auto;
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
`;

function App() {
  return (
    <Container>
      <H1>✔️ Task List</H1>
      <Text style={{marginTop:-20}}>
        Break your life to simple tasks to get things done!
        <br />
        Does not matter how many tasks you done, It’s important to break to
        small tasks and be on progress.
      </Text>
      <Cards />
    </Container>
  );
}

export default App;
