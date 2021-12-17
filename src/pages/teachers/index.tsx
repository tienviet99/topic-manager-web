import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import SpinnerFeature from 'components/sipnner-feature';
import TeacherContainer from 'modules/teachers';

export default function Teacher() {
  const { loading } = useSelector((state: RootState) => state.user);

  return (
    <>
      <Box className="text-4xl flex mb-3">List Teacher</Box>
      <TeacherContainer />
      {loading ? (
        <Box className="absolute top-20 right-14">
          <SpinnerFeature />
        </Box>
      ) : null}
    </>
  );
}
