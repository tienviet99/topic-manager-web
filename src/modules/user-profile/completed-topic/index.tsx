import { Box, Divider, Link, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from 'store';

import { getProfile } from 'store/user/action';
import IUser, { IInfo } from 'types/users';
import ITopic from 'types/topic';

export default function CompletedTopic() {
  const dispatch = useDispatch();

  const { profile }: any = useSelector(
    (state: RootState) => state.user,
  );
  const profileUser: IUser = Object(profile[0]);
  const Topic: any = profileUser.completeTopic;
  const infoUser: IInfo = JSON.parse(
    `${localStorage.getItem('infoUser')}`,
  );

  useEffect(() => {
    dispatch(getProfile(infoUser._id));
  }, [dispatch]);

  console.log('Log: ', Topic);
  return (
    <Box>
      {infoUser.role === 0 ? (
        <Box className="w-2/3 mt-3 pb-10 border-2 border-gray-300 rounded-xl bg-white">
          <Box className="text-left mt-6 mx-10 mb-10">
            <Typography variant="h5"> Completed Topic</Typography>
          </Box>
          {Topic?.map((item: ITopic) => (
            <Box className="ml-10 " key={item._id}>
              <Box className="flex items-center mt-3 ">
                <Typography
                  variant="h6"
                  className="text-gray-500 w-28 text-left"
                >
                  Name :
                </Typography>
                <Box className="text-left ml-5 px-4 rounded-md">
                  <Typography variant="h6">{item.name}</Typography>
                </Box>
              </Box>
              <Box className="flex items-center mt-3 ">
                <Typography
                  variant="h6"
                  className="text-gray-500 w-28 text-left"
                >
                  Link :
                </Typography>
                <Box className="text-left ml-5 px-4 rounded-md">
                  <Typography variant="h6">
                    <Link target="_blank" href={item.link}>
                      Link Product
                    </Link>
                  </Typography>
                </Box>
              </Box>
              <Box className="flex">
                <Box className="flex items-center mt-3 ">
                  <Typography
                    variant="h6"
                    className="text-gray-500 w-28 text-left"
                  >
                    Start Day :
                  </Typography>
                  <Box className="text-left ml-5 px-4 rounded-md">
                    <Typography variant="h6">
                      {item.start_date}
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex items-center mt-3 ml-28">
                  <Typography
                    variant="h6"
                    className="text-gray-500 w-28 text-left"
                  >
                    End Day :
                  </Typography>
                  <Box className="text-left ml-5 px-4 rounded-md">
                    <Typography variant="h6">
                      {item.end_date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="flex items-center mt-3 ">
                <Typography
                  variant="h6"
                  className="text-gray-500 w-28 text-left"
                >
                  Teacher :
                </Typography>
                <Box className="text-left ml-5 px-4 rounded-md">
                  <Typography variant="h6">
                    {item.teacherId.name}
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
