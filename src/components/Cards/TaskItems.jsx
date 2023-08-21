/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const VStack = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  gap: 12px;
`;
export default function TaskItems({ children }) {
  return <VStack>{children}</VStack>;
}
