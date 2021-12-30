import { Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import ButtonBack from 'components/button/button-back';
import ProcessDetail from 'modules/process-user/detail';
import Task from 'modules/process-user/task';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { PATH_PROCESS } from 'routes/routes.path';
import { RootState } from 'store';
import { getProcessById } from 'store/process/action';
import { getTopicById } from 'store/topic/action';

export default function ProcessContainer() {
  const { _id } = useParams<{ _id: string }>();
  const dispatch = useDispatch();
  const { processRow } = useSelector(
    (state: RootState) => state.process,
  );

  useEffect(() => {
    if (_id) {
      dispatch(getProcessById(_id));
    }
  }, []);

  return (
    <Box>
      <Box className="mb-5 w-12">
        <ButtonBack to={PATH_PROCESS} />
      </Box>
      <Box className="mx-10">
        <Grid item xs={12}>
          <Box className="w-full mt-8 bg-white p-5 rounded-lg shadow ">
            <Box className="ml-3">
              <Typography variant="h5">Detail</Typography>
              <Divider className="pt-1" />
            </Box>
            <ProcessDetail _id={processRow.topicId._id} />
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
