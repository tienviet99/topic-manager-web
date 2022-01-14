import { Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import React from 'react';

interface ProgressTaskProps {
  label?: string;
  completePercent: number;
  totalPercent: number;
  onClickProps?: () => void;
}

export default function ProgressTask(props: ProgressTaskProps) {
  const { label, completePercent, totalPercent, onClickProps } =
    props;
  return (
    <Box
      className=" rounded-3xl cursor-pointer hover:opacity-80"
      sx={{
        width: `${(totalPercent / 100) * 1290}px `,
        height: '30px',
        backgroundColor: '#95a5a6',
      }}
      onClick={onClickProps}
    >
      <Box
        className="absolute rounded-3xl z-40"
        sx={{
          width: `${completePercent}%`,
          height: '30px',
          backgroundColor: '#0c2461',
        }}
      >
        {' '}
      </Box>
      <Box
        className="z-50 text-white absolute flex pl-2"
        sx={{
          width: `${(totalPercent / 100) * 1290}px `,
          top: '6px',
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          variant="caption"
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
}

ProgressTask.defaultProps = {
  // eslint-disable-next-line prettier/prettier
  onClickProps: () => { },
  label: '',
};
