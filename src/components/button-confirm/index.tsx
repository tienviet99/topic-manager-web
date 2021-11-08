import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { Box } from '@mui/system';

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
  type: 'button' | 'submit' | 'reset' | undefined;
}

export default function ButtonConfirm({
  onClickProps,
  label,
  type,
}: IButtonProps) {
  return (
    <Box className="px-2 py-1">
      <CustomButton
        className="h-10 w-20"
        variant="outlined"
        onClick={onClickProps}
        type={type}
      >
        {label}
      </CustomButton>
    </Box>
  );
}

ButtonConfirm.defaultProps = {
  onClickProps: () => {},
};
