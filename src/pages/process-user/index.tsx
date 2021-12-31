import { Box } from '@mui/system';
import SpinnerFeature from 'components/sipnner-feature';
import ProcessContainer from 'modules/process-user';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function Process() {
  const { loading } = useSelector(
    (state: RootState) => state.process,
  );
  return (
    <Box className="relative">
      <Box className="text-4xl flex mb-3">My Topic</Box>
      <ProcessContainer />
      {loading ? (
        <Box className="absolute top-0">
          <SpinnerFeature />
        </Box>
      ) : null}
    </Box>
  );
}
