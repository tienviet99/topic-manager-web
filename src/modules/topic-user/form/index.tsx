import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import ButtonConfirm from 'components/button-confirm';

export default function ReportForm() {
  return (
    <Box>
      <Box className="my-9 mx-3 text-left">
        <Box className="w-full">
          <TextField
            fullWidth
            id="content"
            label="Content *"
            multiline
            variant="standard"
          />
        </Box>
      </Box>
      <Box className="my-9 mx-3 text-left">
        <Box className="w-full">
          <TextField
            fullWidth
            id="link"
            label="Link *"
            multiline
            variant="standard"
          />
        </Box>
      </Box>
      <Box className="flex justify-end mt-24 mb-3 mr-2">
        <ButtonConfirm label="Submit" type="submit" />
      </Box>
    </Box>
  );
}
