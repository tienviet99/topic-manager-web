import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getTaskById } from 'store/task/action';
import ITask from 'types/task';
import { getTopicById } from 'store/topic/action';
import ProgressTask from 'components/progress/progress-task';
import Progress from 'components/progress/progress-one';

interface ReportDetailProps {
  idTask: string;
}

export default function ReportDetail(props: ReportDetailProps) {
  const { idTask } = props;
  const dispatch = useDispatch();
  const { taskRow } = useSelector((state: RootState) => state.task);
  const { topicRow } = useSelector((state: RootState) => state.topic);
  const topicId = localStorage.getItem('topic_id');

  useEffect(() => {
    if (idTask) {
      dispatch(getTaskById(idTask));
    }
    if (topicId) {
      dispatch(getTopicById(topicId));
    }
  }, [idTask, topicId]);

  console.log('taskRow: ', taskRow);
  return (
    <Box>
      <Typography variant="h5">Task request</Typography>
      <Divider className="pt-1" />
      <Box className="flex my-5">
        <Box className="mx-3 w-full text-left flex">
          <Typography className="text-gray-500">
            Topic name :
          </Typography>
          <Box className="ml-5">
            <Typography> {Object(topicRow).name} </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box className=" flex w-full my-5">
        <Box className="w-32 h-auto flex flex-col justify-center">
          <Box className="py-3">
            <TimelineOppositeContent color="text.secondary">
              {taskRow.start_date}
            </TimelineOppositeContent>
          </Box>
          <Box className="text-gray-500">
            <ExpandMoreIcon />
          </Box>
          <Box className="py-3">
            <TimelineOppositeContent color="text.secondary">
              {taskRow.end_date}
            </TimelineOppositeContent>
          </Box>
        </Box>
        <TimelineSeparator>
          <TimelineConnector />
        </TimelineSeparator>
        <Box className="ml-3">
          <Box className="mb-5 mx-3 text-left flex">
            <Typography className="text-gray-500 w-24">
              Task name :
            </Typography>
            <Box className="ml-5">
              <Typography>{taskRow.name}</Typography>
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
                value={taskRow.requirements}
              />
            </Box>
          </Box>
          <Box className="flex mt-9">
            <Box className="mx-3 w-full text-left flex">
              <Typography className="text-gray-500 w-28">
                Percent :
              </Typography>
              <Box className="relative w-full">
                <Progress
                  completePercent={taskRow.completePercent}
                  totalPercent={taskRow.totalPercent}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
