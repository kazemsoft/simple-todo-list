/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const H1Typo = styled.h1`
  font-size: 34px;
  line-height: 41.15px;
  font-weight: 600;
  color: #3a3a3a;
`;

export default function H1({ children }) {
  return <H1Typo>{children}</H1Typo>;
}
