import { Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ButtonConfirm from 'components/button/button-confirm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'store';
import { getTopicById } from 'store/topic/action';
import ITopic from 'types/topic';
import './detail.css';

export default function TopicDetailContainer() {
  const dispatch = useDispatch();
  const { _id } = useParams<{ _id: string }>();

  useEffect(() => {
    dispatch(getTopicById(_id));
  }, [_id]);

  const { topicRow } = useSelector((state: RootState) => state.topic);
  const topicData: ITopic = topicRow;

  const infoUser: any = JSON.parse(
    `${localStorage.getItem('infoUser')}`,
  );

  return (
    <Box>
      <Box className="flex my-9">
        <Box className="mx-3 w-full text-left flex">
          <Typography className="text-gray-500">
            Topic ID :
          </Typography>
          <Box className="ml-5">
            <Typography> {topicData.topicId} </Typography>
          </Box>
        </Box>
        <Box className="mx-3 w-full text-left flex">
          <Typography className="text-gray-500">Teacher :</Typography>
          <Box className="ml-5">
            <Typography>{topicData.teacherId?.name}</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="my-9 mx-3 text-left flex">
        <Typography className="text-gray-500 w-20">Name :</Typography>
        <Box className="ml-5">
          <Typography> {topicData.name}</Typography>
        </Box>
      </Box>
      <Box className="flex my-9">
        <Box className="mx-3 w-full text-left flex">
          <Typography className="text-gray-500">
            Start Date :
          </Typography>
          <Box className="ml-5">
            <Typography> {topicData.start_date}</Typography>
          </Box>
        </Box>
        <Box className="mx-3 w-full text-left flex">
          <Typography className="text-gray-500">
            End Date :
          </Typography>
          <Box className="ml-5">
            <Typography> {topicData.end_date}</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="my-9 mx-3 text-left">
        <Typography className="text-gray-500">
          Description :
        </Typography>
        <Box className="m-2">
          <TextField
            className="w-full"
            variant="standard"
            multiline
            disabled
            value={topicData.description}
          />
        </Box>
      </Box>
      <Box className="my-9 mx-3 text-left">
        <Typography className="text-gray-500">
          Requirements :
        </Typography>
        <Box className="m-2">
          <TextField
            className="w-full"
            variant="standard"
            multiline
            disabled
            value={topicData.requirements}
          />
        </Box>
      </Box>
      <Box className="my-9 mx-3 text-left flex">
        <Typography className="text-gray-500">Link :</Typography>
        <Box className="ml-5 cursor-pointer">
          <Link
            href={topicData.link}
            underline="hover"
            className="cursor-pointer"
          >
            {topicData.link}
          </Link>
        </Box>
      </Box>
      <Box className="flex my-9 mx-3 text-left w-full">
        <Typography className="text-gray-500">Major: </Typography>
        <Box className="ml-5">
          <Typography> {topicData.major} </Typography>
        </Box>
      </Box>

      {infoUser.role === 0 ? (
        <Box className="flex justify-end mt-24 mb-3 mr-2">
          <ButtonConfirm label="Register" type="submit" />
        </Box>
      ) : null}
    </Box>
  );
}
