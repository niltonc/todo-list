import { LabelHTMLAttributes } from "react";
import * as S from "./styles";

type InputProps = {
  children?: React.ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ children, ...rest }: InputProps) => {
  return <S.Label {...rest}>{children}</S.Label>;
};
export default Label;
