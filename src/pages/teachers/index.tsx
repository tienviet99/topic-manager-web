import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import SpinnerFeature from 'components/sipnner-feature';
import TeacherContainer from 'modules/teachers';
import Notification from 'components/notification';
import { useState } from 'react';

export default function Teacher() {
  const { loading } = useSelector((state: RootState) => state.user);
  const [noti, setNoti] = useState<
    'error' | 'warning' | 'info' | 'success'
  >('info');

  return (
    <Box className="relative">
      <Box className="text-4xl flex mb-3">List Teacher</Box>
      <TeacherContainer handleNoti={setNoti} />
      {loading ? (
        <Box className="absolute top-20 right-14">
          <SpinnerFeature />
        </Box>
      ) : null}
      {noti !== 'info' ? (
        <Box className="absolute top-0 right-0">
          <Notification status={noti} />
        </Box>
      ) : null}
    </Box>
  );
}
