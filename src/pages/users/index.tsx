import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import SpinnerFeature from 'components/sipnner-feature';
import UserProfile from 'modules/user-profile';

export default function User() {
  const { loading }: any = useSelector(
    (state: RootState) => state.user,
  );

  return (
    <Box className="ml-10 relative">
      <Box className="w-2/3">
        <Box className="my-2">
          <Typography variant="h5">Personal information</Typography>
        </Box>
        <Box className="mb-5">
          <Typography className="text-gray-600">
            Information about you and your complete topic
          </Typography>
        </Box>
      </Box>
      <Box>
        <UserProfile />
      </Box>
      {loading ? (
        <Box className="absolute top-0">
          <SpinnerFeature />
        </Box>
      ) : null}
    </Box>
  );
}
