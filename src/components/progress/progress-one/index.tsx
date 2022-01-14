import { Typography } from '@mui/material';
import { Box } from '@mui/system';

interface ProgressProps {
  completePercent: number;
  totalPercent: number;
}

export default function Progress(props: ProgressProps) {
  const { completePercent, totalPercent } = props;
  const percent: any = (completePercent / totalPercent).toFixed(2);

  return (
    <Box
      className=" rounded-3xl"
      sx={{
        width: `1100px`,
        height: '30px',
        backgroundColor: '#95a5a6',
      }}
    >
      <Box
        className="absolute rounded-3xl z-40"
        sx={{
          width: `${completePercent / totalPercent}`,
          height: '30px',
          backgroundColor: '#0c2461',
        }}
      >
        <Box>
          <Box
            className="z-50 text-white absolute left-1/2 flex pl-2"
            sx={{
              width: `${completePercent / totalPercent}`,
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
              {`${percent * 100}%`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
