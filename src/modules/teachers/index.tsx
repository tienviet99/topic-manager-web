import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, searchUser } from 'store/user/action';
import { useEffect } from 'react';
import { RootState } from 'store';

import Search from 'components/search';
import ButtonCustom from 'components/button/buton-custom';
import { PATH_TEACHER_CREATE } from 'routes/routes.path';
import IUser from 'types/users';
import TeacherList from './list';

interface TeacherContainerProps {
  handleNoti: Function;
}

export default function TeacherContainer(
  props: TeacherContainerProps,
) {
  const { handleNoti } = props;
  const dispatch = useDispatch();

  const hanldeSubmit = (e: string): void => {
    const params = {
      keyword: `${e}`,
    };
    dispatch(searchUser(params));
  };
  const { user } = useSelector((state: RootState) => state.user);
  const teacherData: IUser[] = Object(user).filter(
    (item: IUser) => item.role === 1,
  );

  useEffect(() => {
    dispatch(getUser());
  }, []);

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
        <TeacherList
          teacherList={teacherData}
          handleNoti={handleNoti}
        />
      </Grid>
    </Box>
  );
}
