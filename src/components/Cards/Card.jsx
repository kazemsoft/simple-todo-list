/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const Box = styled.div`
  border-radius: 10px;
  padding: 16px;
  background: ${({ status }) =>
    status === 0 ? "#FEF4F3" : status === 1 ? "#FFFBF2" : "#F4F9F3"};
`;

export default function Card({ status, tasks }) {
  return <Box status={status}>Card</Box>;
}
