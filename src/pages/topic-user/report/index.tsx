import { Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ButtonBack from 'components/button-back';
import ButtonConfirm from 'components/button-confirm';
import ReportForm from 'modules/topic-user/form';
import HistoryTask from 'modules/topic-user/history';
import ReportDetail from 'modules/topic-user/report-detail';
import { useState } from 'react';
import { PATH_TOPIC_USER_CONTAINER } from 'routes/routes.path';

export default function Report() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hanldeOpenModal = (): void => {
    setIsOpen(!isOpen);
  };
  const handleCloseModal = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <Box>
      <Box className="mb-5 w-12">
        <ButtonBack to={PATH_TOPIC_USER_CONTAINER} />
      </Box>
      <Box className="mx-10">
        <Grid item xs={12}>
          <Box className="w-full mt-8 bg-white p-5 rounded-lg shadow ">
            <Box className="ml-3">
              <Typography variant="h5">Task : Name</Typography>
              <Divider className="pt-1" />
              <ReportDetail />
            </Box>
          </Box>
          <Box className="my-3 flex justify-end">
            <ButtonConfirm
              label="History"
              type="button"
              onClickProps={hanldeOpenModal}
            />
          </Box>
          <Box className="w-full bg-white p-5 rounded-lg shadow">
            <Box className="ml-3">
              <Typography variant="h5">Form Report</Typography>
              <Divider className="pt-1" />
              <ReportForm />
            </Box>
            <Box className="flex">{''}</Box>
          </Box>
        </Grid>
      </Box>
      <HistoryTask isOpen={isOpen} handleClose={handleCloseModal} />
    </Box>
  );
}
