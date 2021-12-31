import { Box } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './button-return.module.css';

interface ButtonReturnProps {
  onClickProps: () => void;
}

export default function ButtonReturn({
  onClickProps,
}: ButtonReturnProps) {
  return (
    <Box
      className={styles.button_return_container}
      onClick={onClickProps}
    >
      <ArrowBackIcon />
    </Box>
  );
}
