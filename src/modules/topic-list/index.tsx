import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import Search from 'components/search';
import ButtonCustom from 'components/buton-custom';
import { Link } from 'react-router-dom';
import { PATH_TOPIC_CREATE } from 'routes/routes.path';
import TopicList from './list';
import { topicList } from './topic.data';

export default function TopicListContainer() {
  const hanldeSearch = (input: string) => {
    console.log(input);
  };

  return (
    <Box className="mx-10">
      <Grid item xs={12}>
        <Box className="w-full flex mt-8 justify-between items-center bg-white p-5 rounded-lg shadow">
          <Search onSearch={hanldeSearch} />
          <Link to={PATH_TOPIC_CREATE}>
            <ButtonCustom label="Add Item" />
          </Link>
        </Box>
      </Grid>
      <Grid xs={12} className="mt-8">
        <TopicList topicList={topicList} />
      </Grid>
    </Box>
  );
}
