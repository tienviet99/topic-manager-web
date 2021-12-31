import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getTopicById } from 'store/topic/action';
import ITopic from 'types/topic';
import './detail-process.css';

interface ProcessDetailProps {
  _id: string | undefined;
}

export default function ProcessDetail(props: ProcessDetailProps) {
  const { _id } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (_id) {
      dispatch(getTopicById(_id));
    }
  }, [_id]);

  const { topicRow } = useSelector((state: RootState) => state.topic);
  const topicData: ITopic = Object(topicRow);

  return (
    <Box className=" flex my-5 w-full">
      <Box className="w-32 h-auto flex flex-col justify-center">
        <Box className="py-3">
          <TimelineOppositeContent color="text.secondary">
            {topicData.start_date}
          </TimelineOppositeContent>
        </Box>
        <Box className="text-gray-500">
          <ExpandMoreIcon />
        </Box>
        <Box className="py-3">
          <TimelineOppositeContent color="text.secondary">
            {topicData.end_date}
          </TimelineOppositeContent>
        </Box>
      </Box>
      <TimelineSeparator>
        <TimelineConnector />
      </TimelineSeparator>
      <Box className="ml-3 my-2">
        <Box className="flex mb-5">
          <Box className="mx-3 w-full text-left flex">
            <Typography className="text-gray-500">
              Topic ID :
            </Typography>
            <Box className="ml-5">
              <Typography> {topicData.topicId} </Typography>
            </Box>
          </Box>
          <Box className="flex mx-3 text-left w-full">
            <Typography className="text-gray-500">Major: </Typography>
            <Box className="ml-5">
              <Typography> {topicData.major} </Typography>
            </Box>
          </Box>
          <Box className="mx-3 w-full text-left flex">
            <Typography className="text-gray-500">
              Teacher :
            </Typography>
            <Box className="ml-5">
              <Typography>
                {topicData.teacherId
                  ? topicData.teacherId.name
                  : null}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="my-5 mx-3 text-left flex">
          <Typography className="text-gray-500">Name :</Typography>
          <Box className="ml-5">
            <Typography>{topicData.name}</Typography>
          </Box>
        </Box>
        <Box className="my-5 mx-3 text-left">
          <Typography className="text-gray-500">
            Description :
          </Typography>
          <Box className="m-2">
            <TextField
              className="w-full"
              variant="standard"
              multiline
              disabled
              value={topicData.description}
            />
          </Box>
        </Box>
        <Box className="my-5 mx-3 text-left">
          <Typography className="text-gray-500">
            Requirements :
          </Typography>
          <Box className="m-2">
            <TextField
              className="w-full"
              variant="standard"
              multiline
              disabled
              value={topicData.requirements}
            />
          </Box>
        </Box>
        <Box className="mt-5 mx-3 text-left flex">
          <Typography className="text-gray-500">Link :</Typography>
          <Box className="ml-5 cursor-pointer">
            <Link
              href={topicData.link}
              underline="hover"
              className="cursor-pointer"
            >
              {topicData.link}
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
