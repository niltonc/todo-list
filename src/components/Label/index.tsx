import { LabelHTMLAttributes } from "react";
import * as S from "./styles";
type InputProps = {
  children?: React.ReactNode;
  selected?: string;
} & LabelHTMLAttributes<HTMLLabelElement>;
const Label = ({ children, selected, ...rest }: InputProps) => {
  return (
    <S.Label selected={selected} {...rest}>
      {children}
    </S.Label>
  );
};
export default Label;
