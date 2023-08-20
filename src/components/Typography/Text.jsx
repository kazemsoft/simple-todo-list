/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const P = styled.p`
  font-size: 16px;
  line-height: 30px;
  font-weight: 500;
`;

export default function Text({ children }) {
  return <P>{children}</P>;
}
