import { Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import React from 'react';

interface ProgressTaskProps {
  label: string;
  completePercent: number;
  totalPercent: number;
  onClickProps?: () => void;
}

export default function ProgressTask(props: ProgressTaskProps) {
  const { label, completePercent, totalPercent, onClickProps } =
    props;
  return (
    <Box
      className=" rounded-3xl relative"
      sx={{
        width: '1290px',
        height: '30px',
        backgroundColor: '#95a5a6',
      }}
    >
      <Box
        className="absolute rounded-3xl z-40"
        sx={{
          width: '1290px',
          height: '30px',
          backgroundColor: '#0c2461',
        }}
      >
        {' '}
      </Box>
      <Box className="z-50 text-white absolute transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center">
        <Typography
          sx={{
            width: '1290px',
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          variant="caption"
        >
          {label}
        </Typography>
        {/* <Typography variant="caption">
          {percent * 100}% / {totalPercent * 100}%
        </Typography> */}
      </Box>
    </Box>
  );
}

ProgressTask.defaultProps = {
  // eslint-disable-next-line prettier/prettier
  onClickProps: () => { },
};
