import styled from "styled-components";
import { colors } from "./variable";

export const InputStyles = styled.input`
  width: 310px;
  outline: 0;
  border: none;
  font-size: 1em;
  background: #fff;
  color: #2f4f4f;
`;

export const InputButtonStyles = styled.button`
  font-size: 1em;
  color: #fff;
  background-color: ${colors.primaryColor};
  outline: 0;
  border: none;
  cursor: pointer;
`;

export const ButtonStyles = styled.button`
  font-size: 0.5em;
  background-color: ${colors.secondaryColor};
  color: #fff;
  border: none;
  outline: 0;
  margin: 3px;
  cursor: pointer;
`;
