import { Box, Divider, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from 'store';
import { useHistory } from 'react-router-dom';

import ButtonCancel from 'components/button-cancel';
import { getProfile, logout } from 'store/user/action';
import IUser from 'types/users';
import Avt from 'assets/avt.jpg';
import PopupConfirm from 'components/modal';
import BasicInformation from './basic-information';
import CompletedTopic from './completed-topic';

export default function UserProfile() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hanldeOpenMedal = (): void => {
    setIsOpen(!isOpen);
  };
  const hanldeCloseMedal = (): void => {
    setIsOpen(!isOpen);
  };
  const { profile }: any = useSelector(
    (state: RootState) => state.user,
  );
  const profileUser: IUser = Object(profile[0]);
  const infoUser: any = JSON.parse(
    `${localStorage.getItem('infoUser')}`,
  );
  const handleLoggout = (): void => {
    dispatch(logout());
    history.replace('/login');
  };
  const renderSwitch = (param: number): string => {
    switch (param) {
      case 0:
        return 'Student';
      case 1:
        return 'Teacher';
      case 2:
        return 'Admin';
      default:
        return 'Student';
    }
  };

  useEffect(() => {
    dispatch(getProfile(infoUser._id));
  }, [dispatch]);

  return (
    <Box>
      <BasicInformation />
      <CompletedTopic />
      <Box className="w-2/3 text-right mt-3">
        <ButtonCancel label="Logout" onClickProps={hanldeOpenMedal} />
      </Box>
      <Box>
        <PopupConfirm
          isOpen={isOpen}
          title="Comfirm Logout"
          description="Log Out ?"
          handleConfirm={handleLoggout}
          handleClose={hanldeCloseMedal}
        />
      </Box>
    </Box>
  );
}
