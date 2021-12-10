import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserApi from 'apis/user';
import {
  addUser,
  deleteUser,
  getUser,
  getUserById,
  getUserByUserId,
  searchUser,
  updateUser,
} from 'store/user/action';
import { useEffect } from 'react';
import { RootState } from 'store';

import Search from 'components/search';
import ButtonCustom from 'components/buton-custom';
import { PATH_TEACHER_CREATE } from 'routes/routes.path';
import TeacherList from './list';

export default function TeacherContainer() {
  const create = {
    userId: 'CT020130',
    name: 'Nguyen Ngoc Hai Hieu',
    date: '09/09/1999',
    phone: '0981261036',
    major: 'CNTT',
    role: 0,
    completeTopic: [
      '619b039535078b3dee9c4d14',
      '619b0eb85e3962011dc53c71',
    ],
  };

  const dispatch = useDispatch();

  const hanldeSubmit = (e: string): void => {
    console.log('search: ', e);
    const params = {
      keyword: `${e}`,
    };
    dispatch(searchUser(params));
  };
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  console.log('user: ', user);
  return (
    <Box className="mx-10">
      <Grid item xs={12}>
        <Box className="w-full flex mt-8 justify-between items-center bg-white px-5 py-3 rounded-lg shadow">
          <Search onSubmitForm={hanldeSubmit} />
          <Link to={PATH_TEACHER_CREATE}>
            <ButtonCustom label="Add Teacher" />
          </Link>
        </Box>
      </Grid>
      <Grid xs={12} className="mt-8">
        <TeacherList teacherList={user} />
      </Grid>
    </Box>
  );
}
