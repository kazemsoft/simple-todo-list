import { styled } from "styled-components";
import Card from "./Card";

const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
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
