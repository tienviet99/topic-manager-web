import {
  Box,
  FilledInput,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from 'store';

import ButtonCancel from 'components/button-cancel';
import { getProfile, logout } from 'store/user/action';
import { useHistory } from 'react-router-dom';
import IUser from 'types/users';

export default function UserProfile() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { profile }: any = useSelector(
    (state: RootState) => state.user,
  );
  const profileUser: IUser = Object(profile[0]);
  const infoUser: any = JSON.parse(
    `${localStorage.getItem('infoUser')}`,
  );
  const handleLoggout = (): void => {
    dispatch(logout());
    history.replace('/login');
  };
  const renderSwitch = (param: number): string => {
    switch (param) {
      case 0:
        return 'Student';
      case 1:
        return 'Teacher';
      case 2:
        return 'Admin';
      default:
        return 'Student';
    }
  };

  useEffect(() => {
    dispatch(getProfile(infoUser._id));
  }, [dispatch]);

  console.log(profileUser);
  return (
    <Box>
      <Box className="w-2/3 flex border-2 border-gray-300 rounded-xl">
        <Box className="w-1/2 ml-10 ">
          <Box className="flex items-center mt-10 ">
            <Typography
              variant="h6"
              className="text-gray-600 w-44 text-left"
            >
              Name :
            </Typography>
            <Box className="shadow-md border ml-5 px-4 rounded-md">
              <Typography variant="h6">{profileUser.name}</Typography>
            </Box>
          </Box>
          <Box className="flex items-center mt-6">
            <Typography
              variant="h6"
              className="text-gray-600 w-44 text-left"
            >
              Birthday :
            </Typography>
            <Box className="shadow-md border ml-5 px-4 rounded-md">
              <Typography variant="h6">{profileUser.date}</Typography>
            </Box>
          </Box>
          <Box className="flex items-center mt-6">
            <Typography
              variant="h6"
              className="text-gray-600 w-44 text-left"
            >
              Phone :
            </Typography>
            <Box className="shadow-md border ml-5 px-4 rounded-md">
              <Typography variant="h6">
                {profileUser.phone}
              </Typography>
            </Box>
          </Box>
          <Box className="flex items-center mt-6">
            <Typography
              variant="h6"
              className="text-gray-600 w-44 text-left"
            >
              Type :
            </Typography>
            <Box className="shadow-md border ml-5 px-4 rounded-md">
              <Typography variant="h6">
                {renderSwitch(profileUser.role)}
              </Typography>
            </Box>
          </Box>
          <Box className="flex items-center mt-6 mb-10">
            <Typography
              variant="h6"
              className="text-gray-600 w-44 text-left"
            >
              Major :
            </Typography>
            <Box className="shadow-md border ml-5 px-4 rounded-md">
              <Typography variant="h6">
                {profileUser.major}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>Picture</Box>
      </Box>
      <Box>
        <ButtonCancel label="Logout" onClickProps={handleLoggout} />
      </Box>
    </Box>
  );
}
