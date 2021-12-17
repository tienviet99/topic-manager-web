import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import StudentContainer from 'modules/students';
import SpinnerFeature from 'components/sipnner-feature';

export default function Student() {
  const { loading } = useSelector((state: RootState) => state.user);

  return (
    <>
      <Box className="text-4xl flex mb-3">List Student</Box>
      <StudentContainer />
      {loading ? (
        <Box className="absolute top-20 right-14">
          <SpinnerFeature />
        </Box>
      ) : null}
    </>
  );
}
