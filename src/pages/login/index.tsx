import { Box } from '@mui/system';

import LoginForm from 'modules/login';
import styles from './login.module.css';

export default function Login() {
  return (
    <Box className={styles.container}>
      <Box className="absolute py-28 px-10 top-36 left-56 shadow-md border rounded-md bg-blue-50 bg-opacity-90">
        <LoginForm />
      </Box>
    </Box>
  );
}
