import { Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ButtonCustom from 'components/button/buton-custom';

import ButtonBack from 'components/button/button-back';
import ButtonConfirm from 'components/button/button-confirm';
import SpinnerFeature from 'components/sipnner-feature';
import ProcessDetail from 'modules/process-user/detail';
import Task from 'modules/process-user/task';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { PATH_PROCESS } from 'routes/routes.path';
import { RootState } from 'store';
import { getProcessById } from 'store/process/action';
import { getTopicById } from 'store/topic/action';

export default function ProcessMain() {
  const dispatch = useDispatch();
  const { processRow } = useSelector(
    (state: RootState) => state.process,
  );

  const [delay, setDelay] = useState<boolean>(false);

  useEffect(() => {
    const _id: any = localStorage.getItem('processId');
    if (_id) {
      dispatch(getProcessById(_id));
    }
    setDelay(true);
    setTimeout(() => {
      setDelay(false);
    }, 500);
  }, []);

  return (
    <Box className="relative">
      <Box className="mb-5 w-12">
        <ButtonBack to={PATH_PROCESS} />
      </Box>
      {delay ? (
        <Box className="absolute top-0">
          <SpinnerFeature />
        </Box>
      ) : (
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
                <Box className="flex relative justify-end">
                  <Box className="absolute top-0 left-1/2">
                    <Typography variant="h5">Task</Typography>
                  </Box>
                  <ButtonConfirm label="Update" type="button" />
                </Box>
                <Divider className="pt-1" />
              </Box>
              <Box className="flex">
                <Task _id={processRow._id} />
              </Box>
            </Box>
          </Grid>
        </Box>
      )}
    </Box>
  );
}
