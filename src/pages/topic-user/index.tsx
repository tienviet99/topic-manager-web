import { Box } from '@mui/system';
import SpinnerFeature from 'components/sipnner-feature';
import TopicUserContainer from 'modules/topic-user';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function TopicUser() {
  const { loading } = useSelector((state: RootState) => state.topic);
  return (
    <Box className="relative">
      <Box className="text-4xl flex mb-3">My Topic</Box>
      <TopicUserContainer />
      {loading ? (
        <Box className="absolute top-20 right-14">
          <SpinnerFeature />
        </Box>
      ) : null}
    </Box>
  );
}
