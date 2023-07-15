import styled from "styled-components";

type LabelProps = {
  selected?: string;
};

export const Label = styled.label<LabelProps>`
  color: #111;
  font-size: 16px;
  margin-top: 10px;
  line-height: 24px;
  text-decoration: none;
`;
