import { useState } from 'react';
import { Box } from '@mui/system';
import { TableCell, TableRow, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { PATH_TOPIC_USER_CONTAINER } from 'routes/routes.path';
import ButtonConfirm from 'components/button/button-confirm';
import Table from 'components/table';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from 'store/user/action';
import { RootState } from 'store';
import ITopic from 'types/topic';
import IProcess from 'types/process';
import styles from './topic-user-list.module.css';
import TopicStudentTableHead from './topic-student.table-head';
import TopicTeacherTableHead from './topic-teacher.table-head';

interface TopicUserListProps {
  topicUser: any;
  role: number;
}

export default function TopicUserList(props: TopicUserListProps) {
  const { topicUser, role } = props;
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(0);

  const handleStudentName = (_id: string) => {
    dispatch(getUserById(_id));
    const { userRow } = useSelector((state: RootState) => state.user);
    return userRow.name;
  };

  function renderRows(item: IProcess) {
    return (
      <TableRow key={item._id} className="w-full">
        <TableCell className="w-1/12">{item.topicId}</TableCell>
        <TableCell>
          <Box className={styles.row_name}>{item.topicId.name}</Box>
        </TableCell>
        <TableCell className="w-3/12">
          {item.studentId ? handleStudentName(item.studentId) : null}
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
            <Link to={PATH_TOPIC_USER_CONTAINER}>
              <ButtonConfirm label="View" type="button" />
            </Link>
          </Box>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <Box>
      <Table
        loading={false}
        data={topicUser}
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
