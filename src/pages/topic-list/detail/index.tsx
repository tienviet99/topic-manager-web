import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import ButtonBack from 'components/button/button-back';
import SpinnerFeature from 'components/sipnner-feature';
import TopicDetailContainer from 'modules/topic-list/detail';
import { useEffect, useState } from 'react';
import { PATH_TOPIC_LIST } from 'routes/routes.path';

export default function TopicDetail() {
  const [delay, setDelay] = useState<boolean>(false);

  useEffect(() => {
    setDelay(true);
    setTimeout(() => {
      setDelay(false);
    }, 500);
  }, []);
  return (
    <Box className="relative">
      <Box>
        <Box className="mb-5 w-12">
          <ButtonBack to={PATH_TOPIC_LIST} />
        </Box>
        {delay ? (
          <Box className="absolute top-0">
            <SpinnerFeature />
          </Box>
        ) : (
          <Box className="bg-white p-5 rounded-xl w-6/12 ml-32">
            <Box className="mb-5">
              <Box className="text-3xl flex mb-1">Topic Detail </Box>
              <Box className="w-40">
                <Divider className="bg-black" />
              </Box>
            </Box>
            <TopicDetailContainer />
          </Box>
        )}
      </Box>
    </Box>
  );
}
