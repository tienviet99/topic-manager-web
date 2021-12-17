import { Box } from '@mui/system';
import { ComponentPropsWithoutRef } from 'react';

import styles from './spinner.module.css';

// eslint-disable-next-line prettier/prettier
interface SpinnerProps extends ComponentPropsWithoutRef<'div'> { }

export default function SpinnerFeature({ ...props }: SpinnerProps) {
  return (
    <Box
      className="bg-white w-screen h-screen bg-opacity-50 rounded-md"
      style={{ width: '1530px', height: '800px' }}
    >
      <div className={styles.loader} {...props} />
    </Box>
  );
}
