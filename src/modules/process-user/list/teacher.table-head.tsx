import { TableCell } from '@mui/material';
import { Box } from '@mui/system';

import styles from './user-list.module.css';

export default function TopicTeacherTableHead() {
  return (
    <>
      <TableCell>
        <Box className="text-xl">ID</Box>
      </TableCell>
      <TableCell className={styles.cell_name}>
        <Box className="text-xl">Name</Box>
      </TableCell>
      <TableCell>
        <Box className="text-xl">Student</Box>
      </TableCell>
      <TableCell align="center">
        <Box className="text-xl">Status</Box>
      </TableCell>
      <TableCell align="center">
        <Box className="text-xl">Action</Box>
      </TableCell>
    </>
  );
}
