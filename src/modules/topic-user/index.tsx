import { Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Search from 'components/search';
import TopicUserList from './list';
import { topicUserData } from './topicuser.data';

export default function TopicUserContainer() {
  const hanldeSearch = (input: string) => {};

  return (
    <Box className="mx-10">
      <Grid item xs={12}>
        <Box className="w-full flex mt-8 justify-between items-center bg-white p-5 rounded-lg shadow">
          <Search onSearch={hanldeSearch} />
        </Box>
      </Grid>
      <Grid xs={12} className="mt-8">
        <TopicUserList topicUserListData={topicUserData} />
      </Grid>
    </Box>
  );
}
