import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store';
import { getTopic, searchTopic } from 'store/topic/action';
import { useEffect } from 'react';

import Search from 'components/search';
import ButtonCustom from 'components/button/buton-custom';
import { PATH_TOPIC_CREATE } from 'routes/routes.path';
import TopicList from './list';

interface TopicListContainerProps {
  handleNoti: Function;
}
export default function TopicListContainer(
  props: TopicListContainerProps,
) {
  const { handleNoti } = props;
  const dispatch = useDispatch();
  const { topic } = useSelector((state: RootState) => state.topic);

  const handleSubmit = (e: string): void => {
    const params = {
      keyword: `${e}`,
    };
    dispatch(searchTopic(params));
  };

  const infoUser: any = JSON.parse(
    `${localStorage.getItem('infoUser')}`,
  );

  useEffect(() => {
    dispatch(getTopic());
  }, []);

  return (
    <Box className="mx-10">
      <Grid item xs={12}>
        <Box className="w-full flex mt-6 justify-between items-center bg-white px-5 py-3 rounded-lg shadow">
          <Search onSubmitForm={handleSubmit} />
          {infoUser.role === 2 ? (
            <Link to={PATH_TOPIC_CREATE}>
              <ButtonCustom label="Add Topic" />
            </Link>
          ) : null}
        </Box>
      </Grid>
      <Grid xs={12} className="mt-8">
        <TopicList topicList={topic} handleNoti={handleNoti} />
      </Grid>
    </Box>
  );
}
