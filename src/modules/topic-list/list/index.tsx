import { useState } from 'react';
import { Box } from '@mui/system';
import { TableCell, TableRow, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useHistory } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from 'react-redux';

import { PATH_TOPIC_DETAIL } from 'routes/routes.path';
import Table from 'components/table';
import ITopic from 'types/topic';
import PopupConfirm from 'components/modal';
import { deleteTopic } from 'store/topic/action';
import TopicTableHead from './topic.table-head';
import styles from './topic-list.module.css';

interface TopicListProps {
  topicList: any;
  handleNoti: Function;
}

export default function TopicList(props: TopicListProps) {
  const history = useHistory();
  const infoUser: any = JSON.parse(
    `${localStorage.getItem('infoUser')}`,
  );
  const { topicList, handleNoti } = props;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [topicId, setTopicId] = useState<string | undefined>('');
  const handleOpenModal = (_id: string | undefined): void => {
    setIsOpen(!isOpen);
    setTopicId(_id);
  };
  const hanldeCloseModal = (): void => {
    setIsOpen(!isOpen);
  };
  const handleConfirmModal = async (id: string | undefined) => {
    setIsOpen(!isOpen);
    setPage(0);
    dispatch(deleteTopic(id));
    await handleNoti('success');
    // await setTimeout(() => {
    //   handleNoti('info');
    // }, 4000);
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
          {item.teacherId?.name}
        </TableCell>
        <TableCell className="w-1/12" align="center">
          {item.status ? (
            <Typography> Active </Typography>
          ) : (
            <Typography> Inactive </Typography>
          )}
        </TableCell>
        <TableCell className="w-2/12" align="center">
          {infoUser.role !== 2 ? (
            <VisibilityIcon
              className="mx-4 w-6 hover:text-gray-500 cursor-pointer"
              onClick={() =>
                history.push(`/topic/list/detail/${item._id}`)
              }
            />
          ) : null}
          {infoUser.role === 2 ? (
            <>
              <EditIcon
                className="mx-4 w-6 hover:text-gray-500 cursor-pointer"
                onClick={() =>
                  history.push(`/topic/list/edit/${item._id}`)
                }
              />
              <DeleteIcon
                className="mx-4 w-6 text-red-500 hover:text-red-400 cursor-pointer"
                onClick={() => handleOpenModal(item._id)}
              />
            </>
          ) : null}
        </TableCell>
      </TableRow>
    );
  }

  return (
    <Box>
      <Table
        loading={false}
        data={topicList}
        page={page}
        setPage={setPage}
        head={<TopicTableHead />}
        colSpan={6}
        renderRows={renderRows}
      />
      <PopupConfirm
        isOpen={isOpen}
        title="Comfirm Request"
        description="Delete ?"
        handleConfirm={() => handleConfirmModal(topicId)}
        handleClose={hanldeCloseModal}
      />
    </Box>
  );
}
