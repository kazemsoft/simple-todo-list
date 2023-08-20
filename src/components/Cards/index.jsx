import { styled } from "styled-components";
import Card from "./Card";

const Flex = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  height: 700px;
`;

export default function Cards() {
  return (
    <Flex>
      <Card status={0}>dd</Card>
      <Card status={1}>dd</Card>
      <Card status={2}>dd</Card>
    </Flex>
  );
}
