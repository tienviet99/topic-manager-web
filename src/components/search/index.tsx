import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { ChangeEvent } from 'react';

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
  onSearch: (search: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const hanldeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onSearch(e.target.value);
  };
  return (
    <CustomTextField
      className="w-5/12"
      label="Search here"
      id="custom-css-outlined-input"
      onChange={hanldeChange}
    />
  );
}
