import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Search from 'components/search';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getTopic, searchTopic } from 'store/topic/action';
import ITopic from 'types/topic';
import TopicUserList from './list';

export default function TopicUserContainer() {
  const dispatch = useDispatch();
  const infoUser: any = JSON.parse(
    `${localStorage.getItem('infoUser')}`,
  );
  const { topic } = useSelector((state: RootState) => state.topic);
  const topicTeacher = Object(topic).filter(
    (item: ITopic) => item.teacherId._id === infoUser._id,
  );

  const handleSubmit = (e: string): void => {
    const params = {
      keyword: `${e}`,
    };
    dispatch(searchTopic(params));
  };

  useEffect(() => {
    dispatch(getTopic());
  }, []);

  return (
    <Box className="mx-10">
      <Grid item xs={12}>
        <Box className="w-full flex mt-6 justify-between items-center bg-white px-5 py-3 rounded-lg shadow">
          <Search onSubmitForm={handleSubmit} />
        </Box>
      </Grid>
      <Grid xs={12} className="mt-8">
        <TopicUserList
          topicUser={topicTeacher}
          role={infoUser.role}
        />
      </Grid>
    </Box>
  );
}
