import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TimelineConnector from '@mui/lab/TimelineConnector';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import React, { ReactElement, useEffect, useState } from 'react';
import {
  addTask,
  deleteTask,
  updateTask,
  getTaskByProcessId,
} from 'store/task/action';
import { getProcessById } from 'store/process/action';
import { RootState } from 'store';
import { Divider, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import ITask from 'types/task';
import ButtonCustom from 'components/button/buton-custom';
import ButtonConfirm from 'components/button/button-confirm';
import ButtonCancel from 'components/button/button-cancel';
import DeleteIcon from '@mui/icons-material/Delete';

interface TaskFormProps {
  _id: string | undefined;
  handleUpdate: Function;
  onUpdate: boolean;
}

export default function TaskForm(props: TaskFormProps) {
  const { _id, handleUpdate, onUpdate } = props;
  const dispatch = useDispatch();
  const { task } = useSelector((state: RootState) => state.task);
  const { processRow } = useSelector(
    (state: RootState) => state.process,
  );
  const [taskRow, setTaskRow] = useState<ITask[]>(task);
  const [taskDel, setTaskDel] = useState<string[]>([]);

  useEffect(() => {
    if (_id) {
      dispatch(getTaskByProcessId(_id));
      dispatch(getProcessById(_id));
    }
    const sortTask = task.sort(
      (first, last) =>
        new Date(first.start_date).getTime() -
        new Date(last.start_date).getTime(),
    );
    setTaskRow(sortTask);
  }, [_id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { name, value } = e.target;
    setTaskRow(
      taskRow.map((item: ITask, indexItem: number) =>
        indexItem === index ? { ...item, [name]: value } : item,
      ),
    );
  };
  const handleAddItem = () => {
    setTaskRow([
      ...taskRow,
      {
        processId: processRow._id,
        name: '',
        start_date: '',
        end_date: '',
        requirements: '',
        totalPercent: 0,
        completePercent: 0,
      },
    ]);
  };
  const handleDeleteTask = (
    id: string | undefined,
    index: number,
  ) => {
    if (id) {
      setTaskDel([...taskDel, id]);
    }
    setTaskRow(
      taskRow.filter((item: ITask, indexItem) => indexItem !== index),
    );
  };
  const handleConfirm = () => {
    taskRow.forEach((item: ITask) => {
      if (item._id) {
        dispatch(updateTask(item._id, item));
      } else {
        dispatch(addTask(item));
      }
    });
    taskDel.forEach((item: string) => {
      dispatch(deleteTask(item));
    });
    handleUpdate(!onUpdate);
  };

  return (
    <>
      {taskRow.map((item: ITask, index: number) => (
        <Box key={item._id}>
          <Box className=" flex my-5 w-full">
            <Box className="w-44 h-auto flex flex-col justify-center">
              <Box className="py-3">
                <TimelineOppositeContent color="text.secondary">
                  <Box className="w-36">
                    <TextField
                      fullWidth
                      id="start_date"
                      name="start_date"
                      label="Start Date"
                      variant="standard"
                      type="date"
                      value={item.start_date}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(
                        e: React.ChangeEvent<HTMLInputElement>,
                      ) => handleChange(e, index)}
                    />
                  </Box>
                </TimelineOppositeContent>
              </Box>
              <Box className="text-gray-500">
                <ExpandMoreIcon />
              </Box>
              <Box className="py-3">
                <TimelineOppositeContent color="text.secondary">
                  <Box className="w-36">
                    <TextField
                      fullWidth
                      id="end_date"
                      name="end_date"
                      label="End Date"
                      variant="standard"
                      type="date"
                      value={item.end_date}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(
                        e: React.ChangeEvent<HTMLInputElement>,
                      ) => handleChange(e, index)}
                    />
                  </Box>
                </TimelineOppositeContent>
              </Box>
            </Box>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <Box className="w-full">
              <Box className="my-5 mx-3 text-left">
                <Box className="w-full">
                  <TextField
                    fullWidth
                    id="taskName"
                    name="name"
                    label="Task Name *"
                    value={item.name}
                    onChange={(
                      e: React.ChangeEvent<HTMLInputElement>,
                    ) => handleChange(e, index)}
                    multiline
                    variant="standard"
                  />
                </Box>
              </Box>
              <Box className="my-5 mx-3 text-left">
                <Box className="w-full">
                  <TextField
                    fullWidth
                    id="requirements"
                    label="Requirements *"
                    name="requirements"
                    multiline
                    value={item.requirements}
                    onChange={(
                      e: React.ChangeEvent<HTMLInputElement>,
                    ) => handleChange(e, index)}
                    variant="standard"
                  />
                </Box>
              </Box>
              <Box className="my-5 text-left flex">
                <Box className="w-1/2 mx-3 ">
                  <Box className="w-1/3">
                    <TextField
                      fullWidth
                      id="completePercent"
                      label="Complete Percent *"
                      name="completePercent"
                      type="number"
                      rows={1}
                      value={item.completePercent}
                      onChange={(
                        e: React.ChangeEvent<HTMLInputElement>,
                      ) => handleChange(e, index)}
                      variant="standard"
                    />
                  </Box>
                </Box>
                <Box className="w-1/2">
                  <Box className="w-1/3 mx-3 ">
                    <TextField
                      fullWidth
                      id="totalPercent"
                      label="Total Percent *"
                      name="totalPercent"
                      type="number"
                      rows={1}
                      value={item.totalPercent}
                      onChange={(
                        e: React.ChangeEvent<HTMLInputElement>,
                      ) => handleChange(e, index)}
                      variant="standard"
                    />
                  </Box>
                </Box>
                <Box className="text-right">
                  <Box
                    className="w-10 h-10 m-3 text-center items-center bg-red-600 text-white border-2 rounded-full flex justify-center cursor-pointer hover:bg-red-500"
                    onClick={() => handleDeleteTask(item._id, index)}
                  >
                    <DeleteIcon />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="bg-red-900">
            <Divider />
          </Box>
        </Box>
      ))}
      <Box className="my-5">
        <ButtonCustom
          label="Add Task"
          onClickProps={() => handleAddItem()}
        />
      </Box>
      <Divider />
      <Divider />
      <Box className="mt-5 text-right">
        <ButtonConfirm
          label="confirm"
          type="button"
          onClickProps={() => handleConfirm()}
        />
      </Box>
    </>
  );
}
