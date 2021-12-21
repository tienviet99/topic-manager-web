import { Box } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import styles from './button-back.module.css';

interface ButtonBackProps {
  to: string;
}

export default function ButtonBack({ to }: ButtonBackProps) {
  return (
    <Link to={to}>
      <Box className={styles.button_back_container}>
        <ArrowBackIcon />
      </Box>
    </Link>
  );
}
