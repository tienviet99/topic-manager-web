import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Box } from '@mui/system';
import { Link, useHistory } from 'react-router-dom';

import ProgressTask from 'components/progress';
import { PATH_REPORT } from 'routes/routes.path';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskByProcessId } from 'store/task/action';
import { useEffect, useState } from 'react';
import { RootState } from 'store';
import { getProcessById } from 'store/process/action';
import ITopic from 'types/topic';
import ITask from 'types/task';
import { dataTask } from './task.data';

interface TaskListProps {
  _id: string | undefined;
}

export default function TaskList(props: TaskListProps) {
  const { _id } = props;
  const history = useHistory();
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
  const paddingLeft: number[] = [];
  let totalPadding: number = 0;

  task.forEach((item: ITask, index: number) => {
    if (index === 0) {
      paddingLeft.push(totalPadding);
      totalPadding += item.completePercent;
    } else {
      paddingLeft.push(totalPadding);
      totalPadding += item.completePercent;
    }
  });

  const handleClickTask = (id: string | undefined): void => {
    history.push(`/process/report/${id}`);
  };

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
      {task.map((item: ITask, index: number) => (
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
            <Box className="w-full flex items-center">
              <Box sx={{ width: `1290px` }}>
                <Box
                  className="relative"
                  sx={{
                    paddingLeft: `${paddingLeft[index]}% `,
                  }}
                >
                  <ProgressTask
                    label={item.name}
                    completePercent={item.completePercent}
                    totalPercent={item.totalPercent}
                    onClickProps={() => handleClickTask(item._id)}
                  />
                </Box>
              </Box>
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
