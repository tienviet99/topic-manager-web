import { Box } from '@mui/system';
import Notification from 'components/notification';
import SpinnerFeature from 'components/sipnner-feature';
import TopicListContainer from 'modules/topic-list';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function TopicList() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { loading } = useSelector((state: RootState) => state.topic);
  return (
    <Box className="relative">
      <Box className="text-4xl flex">List Topic</Box>
      <TopicListContainer handleSuccess={setIsSuccess} />
      {loading ? (
        <Box className="absolute top-20 right-14">
          <SpinnerFeature />
        </Box>
      ) : null}
      {isSuccess ? (
        <Box className="absolute top-0 right-0">
          <Notification status="success" />
        </Box>
      ) : null}
    </Box>
  );
}
