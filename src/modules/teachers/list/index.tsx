import { useState } from 'react';
import { Box } from '@mui/system';
import { TableCell, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

import { PATH_TEACHER_EDIT } from 'routes/routes.path';
import Table from 'components/table';
import IUser from 'types/users';
import PopupConfirm from 'components/modal';
import StudentTableHead from './student.table-head';

interface StudentListProps {
  teacherList: any;
}

export default function TeacherList(props: StudentListProps) {
  const { teacherList } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const hanldeOpenMedal = (): void => {
    setIsOpen(!isOpen);
  };
  const hanldeCloseMedal = (): void => {
    setIsOpen(!isOpen);
  };
  function renderRows(item: any) {
    return (
      <TableRow key={item._id}>
        <TableCell className="w-1/12">{item.userId}</TableCell>
        <TableCell className="w-2/12">
          <Box>{item.name}</Box>
        </TableCell>
        <TableCell className="w-2/12">{item.date}</TableCell>
        <TableCell className="w-2/12">{item.phone}</TableCell>
        <TableCell className="w-2/12">{item.major}</TableCell>
        <TableCell className="w-1/12" align="center">
          <Link to={PATH_TEACHER_EDIT} className="mx-4 w-6">
            <EditIcon className=" hover:text-gray-500 cursor-pointer" />
          </Link>
          <DeleteIcon
            className="mx-4 text-red-500 hover:text-red-400 cursor-pointer"
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
        data={teacherList}
        page={page}
        setPage={setPage}
        head={<StudentTableHead />}
        colSpan={6}
        renderRows={renderRows}
      />
      <PopupConfirm
        isOpen={isOpen}
        title="Comfirm Request"
        description="Delete ?"
        handleConfirm={hanldeCloseMedal}
        handleClose={hanldeCloseMedal}
      />
    </Box>
  );
}
