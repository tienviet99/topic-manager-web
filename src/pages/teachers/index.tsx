import { Box } from '@mui/system';
import StudentContainer from 'modules/students';

export default function Teacher() {
  return (
    <>
      <Box className="text-4xl flex mb-3">List Teacher</Box>
      <StudentContainer />
    </>
  );
}
