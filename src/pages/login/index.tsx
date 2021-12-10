import { Box } from '@mui/system';
import LoginForm from 'modules/login';

export default function Login() {
  return (
    <Box className="w-full flex">
      <Box className="w-1/2">
        <img src="assets/hv-ktmm.jpg" alt="" className="w-full" />
      </Box>
      <Box className="w-1/2 flex justify-center items-center my-80">
        <LoginForm />
      </Box>
    </Box>
  );
}
