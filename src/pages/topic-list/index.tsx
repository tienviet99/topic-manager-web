import { Box } from '@mui/system';
import Notification from 'components/notification';
import SpinnerFeature from 'components/sipnner-feature';
import TopicListContainer from 'modules/topic-list';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function TopicList() {
  const [noti, setNoti] = useState<
    'error' | 'warning' | 'info' | 'success'
  >('info');
  const { loading } = useSelector((state: RootState) => state.topic);
  return (
    <Box className="relative">
      <Box className="text-4xl flex">List Topic</Box>
      <TopicListContainer handleNoti={setNoti} />
      {loading ? (
        <Box className="absolute top-0">
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
