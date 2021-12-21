import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
import { InputLabel, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';

import IUser from 'types/users';
import { majorList } from 'constant/major';
import ButtonConfirm from 'components/button/button-confirm';
import { studentSchema } from './student-form.schema';
import styles from './form.module.css';

interface StudentFormProps {
  mode: 'create' | 'edit';
}

export default function TeacherForm({ mode }: StudentFormProps) {
  const [majorValues, setMajorValues] = useState<string>('');

  const initialValues = useMemo(() => {
    if (mode === 'edit') {
      return {
        userId: '',
        name: '',
        image: '',
        date: '',
        phone: '',
        major: '',
      };
    }
    return {
      userId: '',
      name: '',
      image: '',
      date: '',
      phone: '',
      major: '',
    };
  }, [mode]);

  const handleChangeMajor = (event: SelectChangeEvent): void => {
    setMajorValues(event.target.value);
  };

  const handleSubmit = (values: any): void => {
    const submitData: IUser = {
      ...values,
      major: majorValues,
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
                id="userId"
                label="Teacher ID *"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.userId}
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
        <Box className="my-9 mx-3 text-left">
          <Box className="w-full">
            <TextField
              fullWidth
              id="image"
              label="Image *"
              multiline
              rows={1}
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.image}
            />
          </Box>
        </Box>
        <Box className="flex my-9">
          <Box className="mx-3 w-full text-left">
            <TextField
              fullWidth
              // required
              id="date"
              label="Birthday *"
              variant="standard"
              type="date"
              value={formik.values.date}
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
              id="phone"
              label="Phone *"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </Box>
        </Box>

        <Box className="flex justify-end mt-24 mb-3 mr-2">
          <ButtonConfirm label="Submit" type="submit" />
        </Box>
      </Box>
    </form>
  );
}
