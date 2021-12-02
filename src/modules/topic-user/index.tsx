import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Search from 'components/search';
import { useState } from 'react';
import TopicUserList from './list';
import { topicUserData } from './topicuser.data';

interface TopicUserContainerProps {
  mode: 'student' | 'teacher';
}

export default function TopicUserContainer(
  props: TopicUserContainerProps,
) {
  const { mode } = props;
  const handleSubmit = (e: any): void => {
    console.log('keyWord:', e);
  };

  return (
    <Box className="mx-10">
      <Grid item xs={12}>
        <Box className="w-full flex mt-6 justify-between items-center bg-white px-5 py-3 rounded-lg shadow">
          <Search onSubmitForm={handleSubmit} />
        </Box>
      </Grid>
      <Grid xs={12} className="mt-8">
        <TopicUserList topicUserListData={topicUserData} />
      </Grid>
    </Box>
  );
}

TopicUserContainer.defaulProps = {
  mode: 'student',
};
