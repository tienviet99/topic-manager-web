import { useState } from 'react';
import { Box } from '@mui/system';
import { TableCell, TableRow, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';

import {
  PATH_TOPIC_DETAIL,
  PATH_TOPIC_EDIT,
} from 'routes/routes.path';
import Table from 'components/table';
import ITopic from 'types/topic';
import PopupConfirm from 'components/modal';
import TopicTableHead from './topic.table-head';
import styles from './topic-list.module.css';

interface TopicListProps {
  topicList: any;
}

export default function TopicList(props: TopicListProps) {
  const { topicList } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hanldeOpenMedal = (): void => {
    setIsOpen(!isOpen);
  };
  const hanldeCloseMedal = (): void => {
    setIsOpen(!isOpen);
  };
  function renderRows(item: ITopic) {
    return (
      <TableRow key={item._id} className="w-full">
        <TableCell className="w-1/12">{item.topicId}</TableCell>
        <TableCell>
          <Box className={styles.row_name}>{item.name}</Box>
        </TableCell>
        <TableCell className="w-1/12">{item.major}</TableCell>
        <TableCell className="w-2/12">
          {item.teacherId.name}
        </TableCell>
        <TableCell className="w-1/12" align="center">
          {item.status ? (
            <Typography> Active </Typography>
          ) : (
            <Typography> Inactive </Typography>
          )}
        </TableCell>
        <TableCell className="w-2/12" align="center">
          <Link to={PATH_TOPIC_DETAIL} className="mx-4 w-6">
            <VisibilityIcon className="hover:text-gray-500 cursor-pointer" />
          </Link>
          <Link to={PATH_TOPIC_EDIT} className="mx-4 w-6">
            <EditIcon className=" hover:text-gray-500 cursor-pointer" />
          </Link>
          <DeleteIcon
            className="mx-4 w-6 text-red-500 hover:text-red-400 cursor-pointer"
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
        data={topicList}
        head={<TopicTableHead />}
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
