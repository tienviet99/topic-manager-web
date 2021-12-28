import { useFormik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { InputLabel, TextField, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { useHistory, useParams } from 'react-router-dom';

import ITopic from 'types/topic';
import { majorList } from 'constant/major';
import ButtonConfirm from 'components/button/button-confirm';
import Switch from 'components/switch';
import { getUser } from 'store/user/action';
import {
  addTopic,
  getTopicById,
  updateTopic,
} from 'store/topic/action';
import IUser from 'types/users';
import SpinnerFeature from 'components/sipnner-feature';
import { topicSchema } from './topic-form.schema';
import styles from './form.module.css';

interface TopicFormProps {
  mode: 'create' | 'edit';
  handleNoti: Function;
  noti: string;
}

export default function TopicForm(props: TopicFormProps) {
  const { mode, handleNoti, noti } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const { _id } = useParams<{ _id: string }>();
  const [statusSwitch, setStatusSwitch] = useState<boolean>(true);
  const [err_Date, setErr_Date] = useState<boolean>(false);
  const { topicRow } = useSelector((state: RootState) => state.topic);
  const topicData: ITopic = topicRow;

  useEffect(() => {
    dispatch(getUser());
    if (_id) {
      dispatch(getTopicById(_id));
    }
  }, [_id]);

  const initialValues = useMemo(() => {
    if (mode === 'edit') {
      return {
        topicId: topicData.topicId,
        teacherId: topicData.teacherId._id,
        name: topicData.name,
        start_date: topicData.start_date,
        end_date: topicData.end_date,
        description: topicData.description,
        requirements: topicData.requirements,
        link: topicData.link,
        major: topicData.major,
        status: topicData.status,
      };
    }
    return {
      topicId: '',
      teacherId: '',
      name: '',
      start_date: '',
      end_date: '',
      description: '',
      requirements: '',
      link: '',
      major: '',
      status: true,
    };
  }, [mode, topicData]);
  const { user } = useSelector((state: RootState) => state.user);
  const teacherData: IUser[] = Object(user).filter(
    (item: IUser) => item.role === 1,
  );

  const hanldeChangleSwitch = (value: boolean): void => {
    setStatusSwitch(value);
  };
  const validate = (start: string, end: string): boolean => {
    const num_start: number = Date.parse(`${start}`);
    const num_end: number = Date.parse(`${end}`);
    return num_start < num_end;
  };

  const handleSubmit = async (values: any) => {
    const submitData: ITopic = {
      ...values,
      status: statusSwitch,
    };
    const valid = validate(
      submitData.start_date,
      submitData.end_date,
    );
    if (valid) {
      if (mode === 'create') {
        dispatch(addTopic(submitData));
      } else {
        dispatch(updateTopic(_id, submitData));
      }
      handleNoti('success');
      setTimeout(() => {
        history.push('/topic/list');
      }, 2000);

      setErr_Date(false);
    } else setErr_Date(true);
  };
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: topicSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <Box className="flex my-9">
          <Box className="mx-3 w-full text-left">
            <Box>
              <TextField
                fullWidth
                id="topicId"
                name="topicId"
                label="Topic ID *"
                variant="standard"
                InputLabelProps={{
                  shrink: formik.values.topicId !== '',
                }}
                onChange={formik.handleChange}
                value={formik.values.topicId}
              />
            </Box>
            {formik.touched.topicId && formik.errors.topicId ? (
              <span className={styles.error}>
                {formik.errors.topicId}
              </span>
            ) : null}
          </Box>
          <Box className="mx-3 w-full text-left">
            <Box className="w-full">
              <FormControl variant="standard" className="w-full">
                <InputLabel id="major">Teacher *</InputLabel>
                <Select
                  id="teacherId"
                  name="teacherId"
                  value={formik.values.teacherId}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {teacherData.map((item: IUser) => (
                    <MenuItem key={item._id} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {formik.touched.teacherId && formik.errors.teacherId ? (
                <span className={styles.error}>
                  {formik.errors.teacherId}
                </span>
              ) : null}
            </Box>
          </Box>
        </Box>
        <Box className="my-9 mx-3 text-left">
          <Box className="w-full">
            <TextField
              fullWidth
              id="name"
              label="Name *"
              multiline
              variant="standard"
              InputLabelProps={{
                shrink: formik.values.name !== '',
              }}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Box>
          {formik.touched.name && formik.errors.name ? (
            <span className={styles.error}>{formik.errors.name}</span>
          ) : null}
        </Box>
        <Box className="flex my-9">
          <Box className="mx-3 w-full text-left">
            <TextField
              fullWidth
              id="start_date"
              name="start_date"
              label="Start Date"
              variant="standard"
              type="date"
              value={formik.values.start_date}
              onChange={formik.handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Date :
                  </InputAdornment>
                ),
              }}
            />
            {formik.touched.start_date && formik.errors.start_date ? (
              <span className={styles.error}>
                {formik.errors.start_date}
              </span>
            ) : null}
          </Box>

          <Box className="mx-3 w-full text-left">
            <TextField
              fullWidth
              id="end_date"
              name="end_date"
              label="End Date"
              variant="standard"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.end_date}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Date :
                  </InputAdornment>
                ),
              }}
            />
            {formik.touched.end_date && formik.errors.end_date ? (
              <span className={styles.error}>
                {formik.errors.end_date}
              </span>
            ) : null}
            {err_Date ? (
              <span className={styles.error}>
                "The end date must be after the start date"
              </span>
            ) : null}
          </Box>
        </Box>
        <Box className="my-9 mx-3 text-left">
          <Box className="w-full">
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description *"
              multiline
              variant="standard"
              InputLabelProps={{
                shrink: formik.values.description !== '',
              }}
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </Box>
          {formik.touched.description && formik.errors.description ? (
            <span className={styles.error}>
              {formik.errors.description}
            </span>
          ) : null}
        </Box>
        <Box className="my-9 mx-3 text-left">
          <Box className="w-full">
            <TextField
              fullWidth
              id="requirements"
              name="requirements"
              label="Requirements *"
              multiline
              variant="standard"
              InputLabelProps={{
                shrink: formik.values.requirements !== '',
              }}
              onChange={formik.handleChange}
              value={formik.values.requirements}
            />
          </Box>
          {formik.touched.requirements &&
          formik.errors.requirements ? (
            <span className={styles.error}>
              {formik.errors.requirements}
            </span>
          ) : null}
        </Box>
        <Box className="my-9 mx-3 text-left">
          <Box className="w-full">
            <TextField
              fullWidth
              id="link"
              name="link"
              label="Link"
              multiline
              rows={1}
              variant="standard"
              InputLabelProps={{
                shrink: formik.values.link !== '',
              }}
              onChange={formik.handleChange}
              value={formik.values.link}
            />
          </Box>
          {formik.touched.link && formik.errors.link ? (
            <span className={styles.error}>{formik.errors.link}</span>
          ) : null}
        </Box>
        <Box className="flex my-9 mx-3 text-left">
          <Box className="w-full">
            <FormControl variant="standard" className="w-full">
              <InputLabel id="major">Major *</InputLabel>
              <Select
                id="major"
                name="major"
                value={formik.values.major}
                onChange={formik.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {majorList.map((majorItem) => (
                  <MenuItem key={majorItem} value={majorItem}>
                    {majorItem}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {formik.touched.major && formik.errors.major ? (
              <span className={styles.error}>
                {formik.errors.major}
              </span>
            ) : null}
          </Box>
          <Box className="mx-3 w-full text-left flex justify-start items-end">
            <Box className="mr-6">
              <Typography className="text-gray-500">
                Status
              </Typography>
            </Box>
            <Switch onChange={hanldeChangleSwitch} isChecked={true} />
          </Box>
        </Box>
        <Box className="flex justify-end mt-24 mb-3 mr-2">
          {noti !== 'success' ? (
            <ButtonConfirm label="Submit" type="submit" />
          ) : (
            <Box className="absolute top-20 right-14">
              <SpinnerFeature />
            </Box>
          )}
        </Box>
      </Box>
    </form>
  );
}
