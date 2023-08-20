/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const P = styled.div`
  font-size: 16px;
  line-height: 30px;
  font-weight: 400;
`;

export default function Text({ children, ...rest }) {
  return <P {...rest}>{children}</P>;
}
