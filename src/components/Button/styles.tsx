import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

type ButtonProps = {
  width?: number | string | undefined;
  background?: number | string | undefined;
  textColor?: string;
};

const StyledButton = styled(Button)<ButtonProps>(props => ({
  width: props.width,
  color: props.textColor,
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 'bold',
  background: props.background,
  ':hover': {
    background: props.background,
    opacity: 0.5,
  },
}));

export default StyledButton;
