import { useState } from 'react';
import { Box } from '@mui/system';
import { TableCell, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

import { PATH_STUDENT_EDIT } from 'routes/routes.path';
import Table from 'components/table';
import IUser from 'types/users';
import PopupConfirm from 'components/modal';
import styles from './student-list.module.css';
import StudentTableHead from './student.table-head';

interface StudentListProps {
  studentList: any;
}

export default function StudentList(props: StudentListProps) {
  const { studentList } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hanldeOpenMedal = (): void => {
    setIsOpen(!isOpen);
  };
  const hanldeCloseMedal = (): void => {
    setIsOpen(!isOpen);
  };
  function renderRows(item: IUser) {
    return (
      <TableRow key={item.id}>
        <TableCell className="w-1/12">{item.userId}</TableCell>
        <TableCell className="w-2/12">
          <Box>{item.name}</Box>
        </TableCell>
        <TableCell className="w-2/12">{item.date}</TableCell>
        <TableCell className="w-2/12">{item.phone}</TableCell>
        <TableCell className="w-2/12">{item.major}</TableCell>
        <TableCell className="w-1/12" align="center">
          <Link to={PATH_STUDENT_EDIT} className="mx-5 w-6">
            <EditIcon className=" hover:text-gray-500 cursor-pointer" />
          </Link>
          <DeleteIcon
            className="mx-5 text-red-500 hover:text-red-400 cursor-pointer"
            onClick={hanldeOpenMedal}
          />
        </TableCell>
      </TableRow>
    );
  }
  return (
    <Box>
      <Table
        loading={false}
        data={studentList}
        head={<StudentTableHead />}
        colSpan={6}
        renderRows={renderRows}
      />
      <PopupConfirm
        isOpen={isOpen}
        title="Comfirm Request"
        description="Delete ?"
        handleClose={hanldeCloseMedal}
      />
    </Box>
  );
}
