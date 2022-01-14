import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { TableCell, TableRow, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';

import { PATH_PROCESS_CONTAINER } from 'routes/routes.path';
import ButtonConfirm from 'components/button/button-confirm';
import Table from 'components/table';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUserById } from 'store/user/action';
import { RootState } from 'store';
import ITopic from 'types/topic';
import IProcess from 'types/process';
import IUser from 'types/users';
import styles from './user-list.module.css';
import TopicStudentTableHead from './student.table-head';
import TopicTeacherTableHead from './teacher.table-head';

interface ProcessListProps {
  processUser: IProcess[];
  role: number;
}

export default function ProcessList(props: ProcessListProps) {
  const { processUser, role } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const [page, setPage] = useState<number>(0);
  const { user } = useSelector((state: RootState) => state.user);
  const userData: IUser[] = Object(user);

  const handleStudentName = (_id: string): string => {
    if (_id) {
      const userRow: IUser | undefined = userData.find(
        (item: IUser) => item._id === _id,
      );
      if (userRow) return userRow.name;
    }
    return '';
  };

  const handleUpdateProcessId = (
    _id: string | undefined,
    topic_id: string | undefined,
  ): void => {
    history.push(`/process/container/${_id}`);
    localStorage.setItem('processId', `${_id}`);
    localStorage.setItem('topic_id', `${topic_id}`);
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  function renderRows(item: IProcess) {
    return (
      <TableRow key={item._id} className="w-full">
        <TableCell className="w-1/12">
          {item.topicId.topicId}
        </TableCell>
        <TableCell>
          <Box className={styles.row_name}>{item.topicId.name}</Box>
        </TableCell>
        <TableCell className="w-3/12">
          {handleStudentName(item.studentId)}
        </TableCell>
        <TableCell className="w-1/12" align="center">
          {item.status ? (
            <Typography> Active </Typography>
          ) : (
            <Typography> Inactive </Typography>
          )}
        </TableCell>
        <TableCell className="w-2/12" align="center">
          <Box className="w-full flex justify-center">
            <ButtonConfirm
              label="View"
              type="button"
              onClickProps={() =>
                handleUpdateProcessId(item._id, item.topicId._id)
              }
            />
          </Box>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <Box>
      <Table
        loading={false}
        data={processUser}
        page={page}
        setPage={setPage}
        head={
          role === 1 ? (
            <TopicTeacherTableHead />
          ) : (
            <TopicStudentTableHead />
          )
        }
        colSpan={6}
        renderRows={renderRows}
      />
    </Box>
  );
}
