import { Box } from '@mui/system';
import TeacherContainer from 'modules/teachers';

export default function Teacher() {
  return (
    <>
      <Box className="text-4xl flex mb-3">List Teacher</Box>
      <TeacherContainer />
    </>
  );
}
