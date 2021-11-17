import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
import { InputLabel, TextField, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';

import ITopic from 'types/topic';
import { teacherList } from 'constant/teacher';
import { majorList } from 'constant/major';
import ButtonConfirm from 'components/button-confirm';
import Switch from 'components/switch';
import { topicSchema } from './topic-form.schema';
import styles from './form.module.css';

interface TopicFormProps {
  mode: 'create' | 'edit';
}

export default function TopicForm({ mode }: TopicFormProps) {
  const [majorValues, setMajorValues] = useState<string>('');
  const [teacherValue, setTeacherValue] = useState<string>('');
  const [statusSwitch, setStatusSwitch] = useState<boolean>(true);

  const initialValues = useMemo(() => {
    if (mode === 'edit') {
      return {
        topicId: '',
        teacher: '',
        name: '',
        start_date: '',
        end_date: '',
        description: '',
        link: '',
        major: '',
        status: true,
      };
    }
    return {
      topicId: '',
      teacher: '',
      name: '',
      start_date: '',
      end_date: '',
      description: '',
      link: '',
      major: '',
      status: true,
    };
  }, [mode]);

  const hanldeChangleSwitch = (value: boolean): void => {
    setStatusSwitch(value);
  };
  const handleChangeMajor = (event: SelectChangeEvent): void => {
    setMajorValues(event.target.value);
  };
  const handleChangeTeacher = (event: SelectChangeEvent): void => {
    setTeacherValue(event.target.value);
  };

  const handleSubmit = (values: any): void => {
    const submitData: ITopic = {
      ...values,
      teacher: teacherValue,
      major: majorValues,
      status: statusSwitch,
    };
    console.log('submitData : ', submitData);
  };
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: handleSubmit,
    // validationSchema: topicSchema,
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
                label="Topic ID *"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.topicId}
              />
            </Box>
            {/* {formik.touched.topicId && formik.errors.topicId ? (
              <span className={styles.error}>
                {formik.errors.topicId}
              </span>
            ) : null} */}
          </Box>
          <Box className="mx-3 w-full text-left">
            <Box className="w-full">
              <FormControl variant="standard" className="w-full">
                <InputLabel id="major">Teacher *</InputLabel>
                <Select
                  labelId="teacher"
                  id="select-teacher"
                  value={teacherValue}
                  onChange={handleChangeTeacher}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {teacherList.map((teacherItem) => (
                    <MenuItem key={teacherItem} value={teacherItem}>
                      {teacherItem}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* {formik.touched.major && formik.errors.major ? (
                <span className={styles.error}>
                  {formik.errors.major}
                </span>
              ) : null} */}
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
              rows={1}
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Box>
          {/* {formik.touched.name && formik.errors.name ? (
            <span className={styles.error}>{formik.errors.name}</span>
          ) : null} */}
        </Box>
        <Box className="flex my-9">
          <Box className="mx-3 w-full text-left">
            <TextField
              fullWidth
              // required
              id="start_date"
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
          </Box>
          <Box className="mx-3 w-full text-left">
            <TextField
              fullWidth
              // required
              id="end_date"
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
          </Box>
        </Box>
        <Box className="my-9 mx-3 text-left">
          <Box className="w-full">
            <TextField
              fullWidth
              id="description"
              label="Description *"
              multiline
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </Box>
          {/* {formik.touched.description && formik.errors.description ? (
            <span className={styles.error}>
              {formik.errors.description}
            </span>
          ) : null} */}
        </Box>
        <Box className="my-9 mx-3 text-left">
          <Box className="w-full">
            <TextField
              fullWidth
              id="link"
              label="Link"
              multiline
              rows={1}
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.link}
            />
          </Box>
          {/* {formik.touched.link && formik.errors.link ? (
            <span className={styles.error}>{formik.errors.link}</span>
          ) : null} */}
        </Box>
        <Box className="flex my-9 mx-3 text-left">
          <Box className="w-full">
            <FormControl variant="standard" className="w-full">
              <InputLabel id="major">Major *</InputLabel>
              <Select
                labelId="major"
                id="select-major"
                value={majorValues}
                onChange={handleChangeMajor}
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
            {/* {formik.touched.major && formik.errors.major ? (
              <span className={styles.error}>
                {formik.errors.major}
              </span>
            ) : null} */}
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
          <ButtonConfirm label="Submit" type="submit" />
        </Box>
      </Box>
    </form>
  );
}
