import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';

import ButtonCancel from 'components/button/button-cancel';
import { history } from './history.data';
import styles from './history.module.css';

interface HistoryTaskProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function HistoryTask(props: HistoryTaskProps) {
  const { isOpen, handleClose } = props;
  let count = 0;

  return (
    <Box>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal_container}>
          <Box className="flex justify-center m-1">
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
            >
              History: Task 1
            </Typography>
          </Box>
          <Box>
            <Divider />
          </Box>
          <Box className={styles.modal_history}>
            {history.map((item) => (
              <Box
                key={item.id}
                className="bg-white my-5 mx-3 rounded-lg"
              >
                <Box className="pl-3 py-3">
                  <Box className="flex">
                    <Typography className="text-gray-500">
                      Count :
                    </Typography>
                    <Box className="ml-1">
                      <Typography>{(count += 1)}</Typography>
                    </Box>
                  </Box>
                  <Box className="flex">
                    <Typography className="text-gray-500">
                      Content:
                    </Typography>
                    <Box className="ml-1">
                      <Typography>{item.content}</Typography>
                    </Box>
                  </Box>
                  <Box className="flex">
                    <Typography className="text-gray-500">
                      Link:
                    </Typography>
                    <Box className="ml-1">
                      <Typography>{item.link}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className="flex justify-end mt-9">
            <ButtonCancel label="Cancel" onClickProps={handleClose} />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
