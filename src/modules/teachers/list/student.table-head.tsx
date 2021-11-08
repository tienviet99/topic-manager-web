import { TableCell } from '@mui/material';
import { Box } from '@mui/system';
import styles from './student-list.module.css';

export default function StudentTableHead() {
  return (
    <>
      <TableCell>
        <Box className="text-xl">ID</Box>
      </TableCell>
      <TableCell>
        <Box className="text-xl">Name</Box>
      </TableCell>
      <TableCell>
        <Box className="text-xl">Date</Box>
      </TableCell>
      <TableCell>
        <Box className="text-xl">Phone</Box>
      </TableCell>
      <TableCell>
        <Box className="text-xl">Major</Box>
      </TableCell>
      <TableCell align="center">
        <Box className="text-xl">Action</Box>
      </TableCell>
    </>
  );
}
