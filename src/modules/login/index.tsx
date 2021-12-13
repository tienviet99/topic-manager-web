import { Box, TextField, Typography } from '@mui/material';
import ButtonConfirm from 'components/button-confirm';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import { ILogin } from 'types/users';

export default function LoginForm() {
  const history = useHistory();
  const initialValues: ILogin = {
    userId: '',
    password: '',
  };
  const handleSubmit = (values: ILogin) => {
    const submitData: ILogin = {
      userId: values.userId,
      password: values.password,
    };
    console.log(submitData);
    history.push('/');
  };
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: handleSubmit,
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <Typography variant="h4" component="div" gutterBottom>
            Login to Topic Manager
          </Typography>
          <Typography>Fill your ID and Password</Typography>
        </Box>
        <Box>
          <Box className="m-5">
            <TextField
              className="w-96"
              id="userId"
              name="userId"
              label="User Id"
              variant="outlined"
              value={formik.values.userId}
              onChange={formik.handleChange}
            />
          </Box>
          <Box className="m-5">
            <TextField
              className="w-96"
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Box>
          <ButtonConfirm label="Login" type="submit" />
        </Box>
      </form>
    </Box>
  );
}
