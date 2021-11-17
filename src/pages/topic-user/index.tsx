import { Box } from '@mui/system';
import TopicUserContainer from 'modules/topic-user';
import React from 'react';

export default function TopicUser() {
  return (
    <>
      <Box className="text-4xl flex mb-3">My Topic</Box>
      <TopicUserContainer />
    </>
  );
}
