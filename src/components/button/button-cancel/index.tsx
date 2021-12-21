import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { Box } from '@mui/system';

const CustomButton = styled(Button)<ButtonProps>(() => ({
  color: 'white',
  backgroundColor: '#c0392b',
  '&:hover': {
    backgroundColor: '#e74c3c',
  },
}));

interface IButtonProps {
  onClickProps?: () => void;
  label: string;
}

export default function ButtonCancel({
  onClickProps,
  label,
}: IButtonProps) {
  return (
    <Box className="px-2 py-1">
      <CustomButton
        className="h-10 w-20"
        variant="outlined"
        onClick={onClickProps}
      >
        {label}
      </CustomButton>
    </Box>
  );
}

ButtonCancel.defaultProps = {
  onClickProps: () => {},
};
