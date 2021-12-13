import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useMemo } from 'react';
import { useFormik } from 'formik';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const CustomFormControl = styled(FormControl)({
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
      <CustomFormControl
        sx={{ m: 2, width: '50ch' }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">
          Search here
        </InputLabel>
        <OutlinedInput
          id="custom-css-outlined-input"
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Search Here"
          className="w-full"
          name="keyword"
          onChange={formik.handleChange}
          value={formik.values.keyword}
        />
      </CustomFormControl>
      <Button type="submit" className="invisible" />
    </form>
  );
}
