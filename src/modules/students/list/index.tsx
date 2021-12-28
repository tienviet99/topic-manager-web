import { useState } from 'react';
import { Box } from '@mui/system';
import { TableCell, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useHistory } from 'react-router-dom';

import { PATH_STUDENT_EDIT } from 'routes/routes.path';
import Table from 'components/table';
import IUser from 'types/users';
import PopupConfirm from 'components/modal';
import { useDispatch } from 'react-redux';
import { deleteUser } from 'store/user/action';
import styles from './student-list.module.css';
import StudentTableHead from './student.table-head';

interface StudentListProps {
  studentList: any;
  handleNoti: Function;
}

export default function StudentList(props: StudentListProps) {
  const { studentList, handleNoti } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [studentId, setStudentId] = useState<string | undefined>('');
  const hanldeOpenMedal = (_id: string | undefined): void => {
    setIsOpen(!isOpen);
    setStudentId(_id);
  };
  const hanldeCloseMedal = (): void => {
    setIsOpen(!isOpen);
  };
  const handleConfirmModal = async (id: string | undefined) => {
    setIsOpen(!isOpen);
    setPage(0);
    dispatch(deleteUser(id));
    await handleNoti('success');
    // await setTimeout(() => {
    //   handleNoti('info');
    // }, 4000);
  };
  function renderRows(item: any) {
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
          <EditIcon
            className="mx-4 w-6 hover:text-gray-500 cursor-pointer"
            onClick={() => history.push(`/student/edit/${item._id}`)}
          />

          <DeleteIcon
            className="mx-4 text-red-500 hover:text-red-400 cursor-pointer"
            onClick={() => hanldeOpenMedal(item._id)}
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
        handleConfirm={() => handleConfirmModal(studentId)}
        handleClose={hanldeCloseMedal}
      />
    </Box>
  );
}
