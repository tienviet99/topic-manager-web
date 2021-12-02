import { Box } from '@mui/system';
import TopicUserContainer from 'modules/topic-user';

export default function TopicUser() {
  const role: number = 1;
  return (
    <>
      <Box className="text-4xl flex mb-3">My Topic</Box>
      {role === 1 ? (
        <TopicUserContainer mode="teacher" />
      ) : (
        <TopicUserContainer mode="student" />
      )}
    </>
  );
}
