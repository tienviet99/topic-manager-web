import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Button, { ButtonProps } from '@mui/material/Button';

const CustomButton = styled(Button)<ButtonProps>(() => ({
  color: 'white',
  backgroundColor: '#0c2461',
  '&:hover': {
    backgroundColor: '#273c75',
  },
}));

interface IButtonProps {
  onClickProps?: () => void;
  label: string;
}

export default function ButtonCustom({
  onClickProps,
  label,
}: IButtonProps) {
  return (
    <CustomButton
      className="h-12"
      variant="outlined"
      startIcon={<AddIcon />}
      onClick={onClickProps}
    >
      {label}
    </CustomButton>
  );
}

ButtonCustom.defaultProps = {
  onClickProps: () => {},
};
