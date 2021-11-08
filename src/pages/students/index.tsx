import { Box } from '@mui/system';
import StudentContainer from 'modules/students';

export default function Student() {
  return (
    <>
      <Box className="text-4xl flex mb-3">List Student</Box>
      <StudentContainer />
    </>
  );
}
