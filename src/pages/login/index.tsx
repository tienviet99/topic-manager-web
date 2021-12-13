import { Box } from '@mui/system';

import LoginForm from 'modules/login';
import logo from 'assets/hv-ktmm.jpg';

export default function Login() {
  return (
    <Box
      className="h-screen w-screen relative"
      style={{ backgroundColor: '#0c2461' }}
    >
      <Box className="flex w-10/12 bg-gray-50 absolute top-20 left-40 rounded-2xl">
        <Box
          className="w-1/2 flex justify-center items-center "
          style={{ backgroundColor: '#ECECEC' }}
        >
          <img src={logo} alt="" className="rounded-2xl" />
        </Box>
        <Box className="w-1/2 flex justify-center items-center">
          <Box>
            <LoginForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
