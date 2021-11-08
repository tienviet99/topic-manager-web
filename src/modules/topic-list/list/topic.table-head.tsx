import { TableCell } from '@mui/material';
import { Box } from '@mui/system';
import styles from './topic-list.module.css';

export default function TopicTableHead() {
  return (
    <>
      <TableCell>
        <Box className="text-xl">ID</Box>
      </TableCell>
      <TableCell className={styles.cell_name}>
        <Box className="text-xl">Name</Box>
      </TableCell>
      <TableCell>
        <Box className="text-xl">Major</Box>
      </TableCell>
      <TableCell>
        <Box className="text-xl">Teacher</Box>
      </TableCell>
      <TableCell>
        <Box className="text-xl">Status</Box>
      </TableCell>
      <TableCell align="center">
        <Box className="text-xl">Action</Box>
      </TableCell>
    </>
  );
}
