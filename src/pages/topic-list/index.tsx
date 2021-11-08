import { Box } from '@mui/system';
import TopicListContainer from 'modules/topic-list';

export default function TopicList() {
  return (
    <>
      <Box className="text-4xl flex mb-3">List Topic</Box>
      <TopicListContainer />
    </>
  );
}
