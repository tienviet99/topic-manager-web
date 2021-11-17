import * as React from 'react';
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
import { dataTask } from './task.data';

export default function Task() {
  return (
    <Box className="mt-5 flex flex-col items-start w-full">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          12/07/2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box>Start Day</Box>
        </TimelineContent>
      </TimelineItem>
      {dataTask.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineOppositeContent color="text.secondary">
            {item.start_day}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ marginLeft: `${item.left * 1290}px` }}>
              <Link to={PATH_REPORT}>
                <ProgressTask
                  label={item.name}
                  percent={item.percent}
                  totalPercent={item.totalPercent}
                />
              </Link>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          12/07/2020
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
