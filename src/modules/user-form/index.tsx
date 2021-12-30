import { useFormik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { InputLabel, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';

import IUser from 'types/users';
import { majorList } from 'constant/major';
import ButtonConfirm from 'components/button/button-confirm';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getUserById, updateUser } from 'store/user/action';
import { useHistory, useParams } from 'react-router-dom';
import SpinnerFeature from 'components/sipnner-feature';
import { RootState } from 'store';
import { userSchema } from './user-form.schema';
import styles from './form.module.css';

interface UserFormProps {
  mode: 'create' | 'edit';
  roles: 0 | 1 | 2;
  handleNoti: Function;
  noti: string;
}

export default function UserForm(props: UserFormProps) {
  const { mode, roles, handleNoti, noti } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const { _id } = useParams<{ _id: string }>();
  const { userRow } = useSelector((state: RootState) => state.user);
  const userData: IUser = Object(userRow);
  const [errMajor, setErrMajor] = useState<boolean>(false);
  const [errDate, setErrDate] = useState<boolean>(false);
  const renderRole = (param: number): string => {
    switch (param) {
      case 0:
        return 'Student ID *';
      case 1:
        return 'Teacher ID *';
      case 2:
        return 'Admin ID *';
      default:
        return 'Student ID *';
    }
  };

  useEffect(() => {
    if (_id) {
      dispatch(getUserById(_id));
    }
  }, [_id]);

  const validate = (start: string, end: any): boolean => {
    const num_start: number = Date.parse(`${start}`);
    const num_end: number = Date.parse(`${end}`);
    return num_start < num_end;
  };
  const initialValues = useMemo(() => {
    if (mode === 'edit') {
      return {
        userId: userData.userId,
        name: userData.name,
        email: userData.email,
        date: userData.date,
        phone: userData.phone,
        major: userData.major,
        role: userData.role,
      };
    }
    return {
      userId: '',
      name: '',
      email: '',
      date: '',
      phone: '',
      major: '',
      role: 0,
      password: 'admin123',
    };
  }, [mode, userData]);

  const handleSubmit = (values: any): void => {
    const submitData: IUser = {
      ...values,
      role: roles,
    };
    const now = new Date();
    const valid = validate(submitData.date, now);
    if (valid) {
      if (mode === 'create') {
        dispatch(addUser(submitData));
      }
      if (mode === 'edit') {
        dispatch(updateUser(_id, submitData));
      }
      handleNoti('success');
      setTimeout(() => {
        if (roles === 0) {
          history.push('/student');
        } else {
          history.push('/teacher');
        }
      }, 2000);
      setErrDate(false);
    } else setErrDate(true);
  };
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: handleSubmit,
    validationSchema: userSchema,
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
                name="userId"
                label={renderRole(roles)}
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.userId}
              />
            </Box>
            {formik.touched.userId && formik.errors.userId ? (
              <span className={styles.error}>
                {formik.errors.userId}
              </span>
            ) : null}
          </Box>
          <Box className="mx-3 w-full text-left">
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
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Box>
          {formik.touched.name && formik.errors.name ? (
            <span className={styles.error}>{formik.errors.name}</span>
          ) : null}
        </Box>
        <Box className="my-9 mx-3 text-left">
          <Box className="w-full">
            <TextField
              fullWidth
              id="email"
              label="Email *"
              multiline
              rows={1}
              variant="standard"
              InputLabelProps={{
                shrink: formik.values.email !== '',
              }}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Box>
        </Box>
        <Box className="flex my-9">
          <Box className="mx-3 w-full text-left">
            <Box>
              <TextField
                fullWidth
                id="date"
                name="date"
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
              {formik.touched.date && formik.errors.date ? (
                <span className={styles.error}>
                  {formik.errors.date}
                </span>
              ) : null}
              {errDate ? (
                <span className={styles.error}>
                  "The date must be before the now date"
                </span>
              ) : null}
            </Box>
          </Box>
          <Box className="mx-3 w-full text-left">
            <Box>
              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Phone *"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </Box>
            {formik.touched.phone && formik.errors.phone ? (
              <span className={styles.error}>
                {formik.errors.phone}
              </span>
            ) : null}
          </Box>
        </Box>
        <Box className="flex justify-end mt-24 mb-3 mr-2">
          {noti === 'info' ? (
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
