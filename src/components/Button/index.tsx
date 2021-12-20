import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import StyledButton from './styles';

interface IButtonProps extends MuiButtonProps {
  textColor: string;
  width: number | string | undefined;
  background: number | string | undefined;
  title: string;
}

const Button = ({
  title,
  width,
  textColor,
  background,
  ...props
}: IButtonProps) => (
  <StyledButton
    width={width}
    textColor={textColor}
    background={background}
    {...props}
  >
    {title}
  </StyledButton>
);

export default Button;
