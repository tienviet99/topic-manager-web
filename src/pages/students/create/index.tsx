import { Box, Divider } from '@mui/material';
import { PATH_STUDENT } from 'routes/routes.path';
import ButtonBack from 'components/button/button-back';
import UserForm from 'modules/user-form';
import { useEffect, useState } from 'react';
import Notification from 'components/notification';
import SpinnerFeature from 'components/sipnner-feature';

export default function StudentCreate() {
  const [noti, setNoti] = useState<
    'error' | 'warning' | 'info' | 'success'
  >('info');
  const [delay, setDelay] = useState<boolean>(false);

  useEffect(() => {
    setDelay(true);
    setTimeout(() => {
      setDelay(false);
    }, 500);
  }, []);

  return (
    <Box className="relative">
      <Box className="mb-5 w-12">
        <ButtonBack to={PATH_STUDENT} />
      </Box>
      {delay ? (
        <Box className="absolute top-0">
          <SpinnerFeature />
        </Box>
      ) : (
        <Box className="bg-white p-5 rounded-xl w-6/12 ml-32">
          <Box className="mb-5">
            <Box className="text-3xl flex mb-1">
              Form Create Student
            </Box>
            <Box className="w-60">
              <Divider className="bg-black" />
            </Box>
          </Box>
          <Box className="text-xl flex mb-3 ml-3">
            Please ennter for all text field
          </Box>
          <UserForm
            mode="create"
            roles={0}
            handleNoti={setNoti}
            noti={noti}
          />
        </Box>
      )}
      {noti !== 'info' ? (
        <Box className="absolute top-0 right-0">
          <Notification status={noti} />
        </Box>
      ) : null}
    </Box>
  );
}
