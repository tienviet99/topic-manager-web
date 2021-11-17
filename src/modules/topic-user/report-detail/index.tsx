import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function ReportDetail() {
  return (
    <Box>
      <Box className="flex my-9">
        <Box className="mx-3 w-full text-left flex">
          <Typography className="text-gray-500">
            Topic Name :
          </Typography>
          <Box className="ml-5">
            <Typography> Topic 1 </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="my-9 mx-3 text-left flex">
        <Typography className="text-gray-500">Task Name :</Typography>
        <Box className="ml-5">
          <Typography> Task 1</Typography>
        </Box>
      </Box>
      <Box className="flex my-9">
        <Box className="mx-3 w-full text-left flex">
          <Typography className="text-gray-500">
            Start Date :
          </Typography>
          <Box className="ml-5">
            <Typography> 17/07/1999</Typography>
          </Box>
        </Box>
        <Box className="mx-3 w-full text-left flex">
          <Typography className="text-gray-500">
            End Date :
          </Typography>
          <Box className="ml-5">
            <Typography> 17/07/2000</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="flex my-9">
        <Box className="mx-3 w-full text-left flex">
          <Typography className="text-gray-500">Percent :</Typography>
          <Box className="ml-5">
            <Typography> 15%</Typography>
          </Box>
        </Box>
        <Box className="mx-3 w-full text-left flex">
          <Typography className="text-gray-500">
            Total Percent :
          </Typography>
          <Box className="ml-5">
            <Typography> 20%</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
