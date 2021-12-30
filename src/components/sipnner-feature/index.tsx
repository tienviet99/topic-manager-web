import { Box } from '@mui/system';
import { ComponentPropsWithoutRef } from 'react';

import styles from './spinner.module.css';

// eslint-disable-next-line prettier/prettier
interface SpinnerProps extends ComponentPropsWithoutRef<'div'> { }

export default function SpinnerFeature({ ...props }: SpinnerProps) {
  return (
    <Box
      className="w-screen h-screen bg-opacity-100 rounded-md"
      style={{
        width: '1560px',
        height: '930px',
        backgroundColor: '#EFF6FF',
      }}
    >
      <div className={styles.loader} {...props} />
    </Box>
  );
}
