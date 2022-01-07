import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

import ProgressTask from 'components/progress';
import { PATH_REPORT } from 'routes/routes.path';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskByProcessId } from 'store/task/action';
import { useEffect } from 'react';
import { RootState } from 'store';
import { getProcessById } from 'store/process/action';
import ITopic from 'types/topic';
import { dataTask } from './task.data';

interface TaskListProps {
  _id: string | undefined;
}

export default function TaskList(props: TaskListProps) {
  const { _id } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (_id) {
      dispatch(getTaskByProcessId(_id));
      dispatch(getProcessById(_id));
    }
  }, [_id]);

  const { task } = useSelector((state: RootState) => state.task);
  const { topicRow } = useSelector((state: RootState) => state.topic);
  const topicData: ITopic = Object(topicRow);

  return (
    <Box className="mt-5 flex flex-col items-start w-full">
      <TimelineItem>
        <TimelineOppositeContent
          color="text.secondary"
          className="w-36"
        >
          {topicData.start_date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box>Start Day</Box>
        </TimelineContent>
      </TimelineItem>
      {task.map((item) => (
        <TimelineItem key={item._id}>
          <TimelineOppositeContent
            color="text.secondary"
            style={{ width: '122px' }}
          >
            {item.start_date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {/* <Box sx={{ marginLeft: `${item.left * 1290}px` }}> */}
            <Box>
              <Link to={PATH_REPORT}>
                <Box className="bg-red-900 h-5 w-full" />
                <ProgressTask
                  label={item.name}
                  completePercent={item.completePercent}
                  totalPercent={item.totalPercent}
                />
              </Link>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
      <TimelineItem>
        <TimelineOppositeContent
          color="text.secondary"
          className="w-36"
        >
          {topicData.end_date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Box>End Day</Box>
        </TimelineContent>
      </TimelineItem>
    </Box>
  );
}
