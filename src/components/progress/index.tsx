import { Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import React from 'react';

interface ProgressTaskProps {
  label: string;
  percent: number;
  totalPercent: number;
}

export default function ProgressTask(props: ProgressTaskProps) {
  const { label, percent, totalPercent } = props;
  return (
    <Box
      className=" rounded-3xl relative"
      sx={{
        width: `${totalPercent * 1290}px`,
        height: '50px',
        backgroundColor: '#95a5a6',
      }}
    >
      <Box
        className="absolute rounded-3xl z-40"
        sx={{
          width: `${percent * 1290}px`,
          height: '50px',
          backgroundColor: '#0c2461',
        }}
      >
        {' '}
      </Box>
      <Box className="z-50 text-white absolute transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center">
        <Typography
          sx={{
            width: `${totalPercent * 1290 - 20}px`,
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </Typography>
        <Typography variant="caption">
          {percent * 100}% / {totalPercent * 100}%
        </Typography>
      </Box>
    </Box>
  );
}
