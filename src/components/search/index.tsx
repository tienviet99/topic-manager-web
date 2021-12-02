import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { ChangeEvent, useMemo, useState } from 'react';
import { useFormik } from 'formik';
import { Button } from '@mui/material';

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#0c2461',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0c2461',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#7f8c8d',
    },
    '&:hover fieldset': {
      borderColor: '#7f8c8d',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0c2461',
    },
  },
});

interface SearchProps {
  onSubmitForm: (e: any) => void;
}

export default function Search({ onSubmitForm }: SearchProps) {
  const initialValues = useMemo(
    () => ({
      keyword: '',
    }),
    [],
  );
  const handleSubmit = (values: any): void => {
    onSubmitForm(values.keyword);
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-5/12 flex">
      <CustomTextField
        className="w-full"
        label="Search here"
        id="custom-css-outlined-input"
        name="keyword"
        onChange={formik.handleChange}
        value={formik.values.keyword}
      />
      <Button type="submit" className="invisible" />
    </form>
  );
}
