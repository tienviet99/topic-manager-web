import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getUser, searchUser } from 'store/user/action';

import Search from 'components/search';
import ButtonCustom from 'components/button/buton-custom';
import { PATH_STUDENT_CREATE } from 'routes/routes.path';
import IUser from 'types/users';
import StudentList from './list';

interface StudentContainerProps {
  handleNoti: Function;
}

export default function StudentContainer(
  props: StudentContainerProps,
) {
  const { handleNoti } = props;
  const dispatch = useDispatch();
  const hanldeSubmit = (e: any): void => {
    const params = {
      keyword: `${e}`,
    };
    dispatch(searchUser(params));
  };
  const { user } = useSelector((state: RootState) => state.user);
  const studentData: IUser[] = Object(user).filter(
    (item: IUser) => item.role === 0,
  );

  useEffect(() => {
    dispatch(getUser());
  }, []);

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
        <StudentList
          studentList={studentData}
          handleNoti={handleNoti}
        />
      </Grid>
    </Box>
  );
}
