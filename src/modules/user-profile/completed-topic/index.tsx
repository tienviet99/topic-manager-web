import { Box, Divider, Link, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from 'store';
import { useHistory } from 'react-router-dom';

import ButtonCancel from 'components/button-cancel';
import { getProfile, logout } from 'store/user/action';
import IUser from 'types/users';
import Avt from 'assets/avt.jpg';
import PopupConfirm from 'components/modal';
import ITopic from 'types/topic';

export default function CompletedTopic() {
  const dispatch = useDispatch();

  const { profile }: any = useSelector(
    (state: RootState) => state.user,
  );
  const profileUser: IUser = Object(profile[0]);
  const completedTopic: string[] | undefined =
    profileUser.completeTopic;
  const infoUser: any = JSON.parse(
    `${localStorage.getItem('infoUser')}`,
  );

  useEffect(() => {
    dispatch(getProfile(infoUser._id));
  }, [dispatch]);

  console.log('completedTopic: ', completedTopic);
  return (
    <Box>
      {infoUser.role !== 2 ? (
        <Box className="w-2/3 mt-3 pb-10 border-2 border-gray-300 rounded-xl bg-white">
          <Box className="text-left mt-6 mx-10 mb-10">
            <Typography variant="h5"> Completed Topic</Typography>
          </Box>
          {completedTopic?.map((item: any, key) => (
            <Box className="ml-10 " key={item._id}>
              <Box className="flex items-center mt-5 ">
                <Typography
                  variant="h6"
                  className="text-gray-500 w-20 text-left"
                >
                  Name :
                </Typography>
                <Box className=" ml-5 px-4 rounded-md">
                  <Typography variant="h6">{item.name}</Typography>
                </Box>
              </Box>
              <Box className="flex items-center mt-5 ">
                <Typography
                  variant="h6"
                  className="text-gray-500 w-20 text-left"
                >
                  Link :
                </Typography>
                <Box className=" ml-5 px-4 rounded-md">
                  <Typography variant="h6">
                    <Link href={item.link}>Link Product</Link>
                  </Typography>
                </Box>
              </Box>
              <Box className="flex">
                <Box className="flex items-center mt-5 ">
                  <Typography
                    variant="h6"
                    className="text-gray-500 w-28 text-left"
                  >
                    Start Day :
                  </Typography>
                  <Box className=" ml-5 px-4 rounded-md">
                    <Typography variant="h6">
                      {item.start_date}
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex items-center mt-5 ml-28">
                  <Typography
                    variant="h6"
                    className="text-gray-500 w-28 text-left"
                  >
                    End Day :
                  </Typography>
                  <Box className=" ml-5 px-4 rounded-md">
                    <Typography variant="h6">
                      {item.end_date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="flex items-center mt-5 ">
                <Typography
                  variant="h6"
                  className="text-gray-500 w-28 text-left"
                >
                  Teacher :
                </Typography>
                <Box className=" ml-5 px-4 rounded-md">
                  <Typography variant="h6">
                    {item.teacherName}
                  </Typography>
                </Box>
              </Box>
              <Box className="mr-5">
                <Divider className="pt-3" />
              </Box>
            </Box>
          ))}
        </Box>
      ) : null}
    </Box>
  );
}
