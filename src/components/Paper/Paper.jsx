/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const Box = styled.div`
  background: #fff;
  border: 1px solid
    ${({ $variant }) =>
      $variant === "alert"
        ? "#F3E1DF"
        : $variant === "warning"
        ? "#EAE2CF"
        : "#DDEED9"};
  border-radius: 4px;
  padding: 12px 10px;
`;

export default function Paper({ children, variant = "success", ...rest }) {
  return (
    <Box $variant={variant} {...rest}>
      {children}
    </Box>
  );
}
