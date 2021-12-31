import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Search from 'components/search';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getProcessByTeacherId } from 'store/process/action';
import { getTopic, searchTopic } from 'store/topic/action';
import ITopic from 'types/topic';
import ProcessList from './list';

export default function ProcessContainer() {
  const dispatch = useDispatch();
  const infoUser: any = JSON.parse(
    `${localStorage.getItem('infoUser')}`,
  );

  const { process } = useSelector(
    (state: RootState) => state.process,
  );
  console.log('process: ', process);

  const handleSubmit = (e: string): void => {
    const params = {
      keyword: `${e}`,
    };
    dispatch(searchTopic(params));
  };

  useEffect(() => {
    dispatch(getProcessByTeacherId(infoUser._id));
  }, []);

  return (
    <Box className="mx-10">
      <Grid item xs={12}>
        <Box className="w-full flex mt-6 justify-between items-center bg-white px-5 py-3 rounded-lg shadow">
          <Search onSubmitForm={handleSubmit} />
        </Box>
      </Grid>
      <Grid xs={12} className="mt-8">
        <ProcessList processUser={process} role={infoUser.role} />
      </Grid>
    </Box>
  );
}
