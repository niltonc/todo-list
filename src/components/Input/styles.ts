import styled from "styled-components";
import theme from "styles/theme";

export const Input = styled.input`
  border: 2px solid ${theme.colors.black};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${theme.colors.black};
  font-size: 16px;
  height: 48px;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;
