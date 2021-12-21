import { Alert, AlertTitle } from '@mui/material';
import { Box } from '@mui/system';
import styles from './notification.module.css';

interface notificationProp {
  status: 'error' | 'warning' | 'info' | 'success';
}

export default function Notification(props: notificationProp) {
  const { status } = props;

  const renderContent = (content: string): string => {
    switch (content) {
      case 'error':
        return 'error alert';
      case 'warning':
        return 'warning alert';
      case 'info':
        return 'info alert';
      case 'success':
        return 'success alert';
      default:
        return 'success alert';
    }
  };
  return (
    <Box className={styles.notification}>
      <Alert className="text-left" severity={status}>
        <AlertTitle>{status.toUpperCase()}</AlertTitle>
        "This is a {renderContent(status)}" —
        <strong> check it out!</strong>
      </Alert>
    </Box>
  );
}
