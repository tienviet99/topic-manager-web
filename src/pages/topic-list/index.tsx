import { Box } from '@mui/system';
import SpinnerFeature from 'components/sipnner-feature';
import TopicListContainer from 'modules/topic-list';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function TopicList() {
  const { loading } = useSelector((state: RootState) => state.topic);

  return (
    <>
      <Box className="text-4xl flex">List Topic</Box>
      <TopicListContainer />
      {loading ? (
        <Box className="absolute top-20 right-14">
          <SpinnerFeature />
        </Box>
      ) : null}
    </>
  );
}
