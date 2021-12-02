import { useState } from 'react';
import { Box } from '@mui/system';
import { TableCell, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';

import { PATH_TOPIC_USER_CONTAINER } from 'routes/routes.path';
import ButtonConfirm from 'components/button-confirm';
import Table from 'components/table';
import styles from './topic-user-list.module.css';
import TopicUserTableHead from './topic-user.table-head';

interface TopicUserListProps {
  topicUserListData: any;
}

export default function TopicUserList(props: TopicUserListProps) {
  const { topicUserListData } = props;
  function renderRows(item: any) {
    return (
      <TableRow key={item.id} className="w-full">
        <TableCell className="w-1/12">{item.topicId}</TableCell>
        <TableCell>
          <Box className={styles.row_name}>{item.name}</Box>
        </TableCell>
        <TableCell className="w-3/12">{item.teacher}</TableCell>
        <TableCell className="w-1/12" align="center">
          {item.status}
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
        data={topicUserListData}
        head={<TopicUserTableHead />}
        colSpan={6}
        renderRows={renderRows}
      />
    </Box>
  );
}
