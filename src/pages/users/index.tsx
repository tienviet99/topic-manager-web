import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import SpinnerFeature from 'components/sipnner-feature';
import UserProfile from 'modules/user-profile';
import { useEffect, useState } from 'react';

export default function User() {
  const { loading } = useSelector((state: RootState) => state.user);

  const [delay, setDelay] = useState<boolean>(false);

  useEffect(() => {
    setDelay(true);
    setTimeout(() => {
      setDelay(false);
    }, 500);
  }, []);

  return (
    <Box className="relative">
      <Box className="w-2/3 ml-10 ">
        <Box className="my-2">
          <Typography variant="h5">Personal information</Typography>
        </Box>
        <Box className="mb-5">
          <Typography className="text-gray-600">
            Information about you and your complete topic
          </Typography>
        </Box>
      </Box>
      {delay ? (
        <Box className="absolute -top-3">
          <SpinnerFeature />
        </Box>
      ) : (
        <Box className="ml-10 ">
          <UserProfile />
        </Box>
      )}
      {loading ? (
        <Box className="absolute top-0">
          <SpinnerFeature />
        </Box>
      ) : null}
    </Box>
  );
}
