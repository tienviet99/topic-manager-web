import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getUser } from 'store/user/action';

import Search from 'components/search';
import ButtonCustom from 'components/buton-custom';
import { PATH_STUDENT_CREATE } from 'routes/routes.path';
import StudentList from './list';

export default function StudentContainer() {
  const dispatch = useDispatch();
  const hanldeSubmit = (e: any): void => {
    console.log(e);
  };
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  // const getUserData = async () => {
  //   try {
  //     const userData = await UserApi.getAll();
  //     console.log('Data: ', userData.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getUserData();
  // }, []);

  return (
    <Box className="mx-10">
      <Grid item xs={12}>
        <Box className="w-full flex mt-8 justify-between items-center bg-white px-5 py-3 rounded-lg shadow">
          <Search onSubmitForm={hanldeSubmit} />
          <Link to={PATH_STUDENT_CREATE}>
            <ButtonCustom label="Add Student" />
          </Link>
        </Box>
      </Grid>
      <Grid xs={12} className="mt-8">
        <StudentList studentList={user} />
      </Grid>
    </Box>
  );
}
