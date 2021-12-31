import { Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ButtonBack from 'components/button/button-back';
import ButtonConfirm from 'components/button/button-confirm';
import ButtonReturn from 'components/button/button-return';
import ReportForm from 'modules/process-user/form';
import HistoryTask from 'modules/process-user/history';
import ReportDetail from 'modules/process-user/report-detail';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Report() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hanldeOpenModal = (): void => {
    setIsOpen(!isOpen);
  };
  const handleCloseModal = (): void => {
    setIsOpen(!isOpen);
  };

  const _id = localStorage.getItem('processId');

  return (
    <Box>
      <Box className="mb-5 w-12">
        <ButtonReturn
          onClickProps={() => {
            history.push(`/process/container/${_id}`);
          }}
        />
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
