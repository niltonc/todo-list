import styled from "styled-components";

type LabelProps = {
  selected?: string;
};

export const Label = styled.label<LabelProps>`
  margin-top: 10px;
  text-decoration: ${({ selected }) => (selected ? "line-through" : "")};
`;
