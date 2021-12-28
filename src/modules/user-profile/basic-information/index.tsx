import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getProfile } from 'store/user/action';

import IUser from 'types/users';
import Avt from 'assets/avt.jpg';

export default function BasicInformation() {
  const dispatch = useDispatch();

  const { profile }: any = useSelector(
    (state: RootState) => state.user,
  );
  const profileUser: IUser = Object(profile);
  const infoUser: any = JSON.parse(
    `${localStorage.getItem('infoUser')}`,
  );
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

  return (
    <Box className="w-2/3 border-2 border-gray-300 rounded-xl bg-white">
      <Box className="text-left my-5 mx-10">
        <Typography variant="h5"> Basic Infomation</Typography>
      </Box>
      <Box className="flex">
        <Box className="w-1/2 ml-10 ">
          <Box className="flex items-center mt-5 ">
            <Typography
              variant="h6"
              className="text-gray-500 w-44 text-left"
            >
              Name :
            </Typography>
            <Box className=" ml-5 px-4 rounded-md">
              <Typography variant="h6">{profileUser.name}</Typography>
            </Box>
          </Box>

          <Divider className="pt-3 mr-3" />
          <Box className="flex items-center mt-3">
            <Typography
              variant="h6"
              className="text-gray-500 w-44 text-left"
            >
              Type :
            </Typography>
            <Box className=" ml-5 px-4 rounded-md">
              <Typography variant="h6">
                {renderSwitch(profileUser.role)}
              </Typography>
            </Box>
          </Box>
          {infoUser.role !== 2 ? (
            <>
              <Divider className="pt-3 mr-3" />
              <Box className="flex items-center mt-3">
                <Typography
                  variant="h6"
                  className="text-gray-500 w-44 text-left"
                >
                  Birthday :
                </Typography>
                <Box className=" ml-5 px-4 rounded-md">
                  <Typography variant="h6">
                    {profileUser.date}
                  </Typography>
                </Box>
              </Box>
              <Divider className="pt-3 mr-3" />
              <Box className="flex items-center mt-3">
                <Typography
                  variant="h6"
                  className="text-gray-500 w-44 text-left"
                >
                  Phone :
                </Typography>
                <Box className=" ml-5 px-4 rounded-md">
                  <Typography variant="h6">
                    {profileUser.phone}
                  </Typography>
                </Box>
              </Box>
              <Divider className="pt-3 mr-3" />
              <Box className="flex items-center mt-3 mb-10">
                <Typography
                  variant="h6"
                  className="text-gray-500 w-44 text-left"
                >
                  Major :
                </Typography>
                <Box className=" ml-5 px-4 rounded-md">
                  <Typography variant="h6">
                    {profileUser.major}
                  </Typography>
                </Box>
              </Box>
            </>
          ) : null}
        </Box>
        <Box className="ml-20 mt-5 mb-10">
          <img src={Avt} alt="" width="350" className="rounded" />
        </Box>
      </Box>
    </Box>
  );
}
