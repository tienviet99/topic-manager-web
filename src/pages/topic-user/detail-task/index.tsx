import { Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import ButtonBack from 'components/button-back';
import TopicUserDetail from 'modules/topic-user/detail';
import Task from 'modules/topic-user/task';
import { PATH_TOPIC_USER } from 'routes/routes.path';

export default function TopicUserDetailTask() {
  return (
    <Box>
      <Box className="mb-5 w-12">
        <ButtonBack to={PATH_TOPIC_USER} />
      </Box>
      <Box className="mx-10">
        <Grid item xs={12}>
          <Box className="w-full mt-8 bg-white p-5 rounded-lg shadow ">
            <Box className="ml-3">
              <Typography variant="h5">Detail</Typography>
              <Divider className="pt-1" />
            </Box>
            <TopicUserDetail />
          </Box>
          <Box className="w-full mt-8 bg-white p-5 rounded-lg shadow">
            <Box className="ml-3">
              <Typography variant="h5">Task</Typography>
              <Divider className="pt-1" />
            </Box>
            <Box className="flex">
              <Task />
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
