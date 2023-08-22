/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const ButtonComponent = styled.button`
  border-radius: 4px;
  color: ${({ $color }) =>
    $color === "alert"
      ? "#D37A87"
      : $color === "warning"
      ? "#C2A25B"
      : $color === "success"
      ? "#286C1A"
      : "#3A3A3A"};
  background-color: transparent;
  cursor: pointer;
  border: 0;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 600;
  line-height: 15.73px;
  &:hover {
    background-color: ${({ $color }) =>
    $color === "alert"
      ? "rgba(211,122,135,0.2)"
      : $color === "warning"
      ? "rgb(194,162,91,0.2);"
      : $color === "success"
      ? "rgb(40,108,26,0.2)"
      : "rgb(255,255,255,0.2)"};
  }
  & svg rect {
    fill: ${({ $color }) =>
      $color === "alert"
        ? "#D37A87"
        : $color === "warning"
        ? "#C2A25B"
        : $color === "success"
        ? "#286C1A"
        : "#3A3A3A"};
  }
`;

export default function Button({ startIcon = null, children, ...rest }) {
  return (
    <ButtonComponent {...rest}>
      {startIcon}
      {children}
    </ButtonComponent>
  );
}
