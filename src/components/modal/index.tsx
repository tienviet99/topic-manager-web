import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import ButtonCancel from 'components/button-cancel';
import ButtonConfirm from 'components/button-confirm';

import styles from './modal.module.css';

interface PopupConfirmProps {
  isOpen: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  title: string;
  description: string;
}

export default function PopupConfirm(props: PopupConfirmProps) {
  const { isOpen, handleClose, handleConfirm, title, description } =
    props;

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal_container}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {title}
          </Typography>
          <Box>
            <Divider />
          </Box>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 3, ml: 3 }}
          >
            {description}
          </Typography>
          <Box className="flex justify-end mt-9">
            <ButtonConfirm
              label="Comfirm"
              type="button"
              onClickProps={handleConfirm}
            />
            <ButtonCancel label="Cancel" onClickProps={handleClose} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
