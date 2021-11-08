import * as Yup from 'yup';

export const studentSchema = Yup.object({
  studentId: Yup.string().required('Please enter student ID'),
  name: Yup.string().required('Please enter name'),
  date: Yup.string().required('Please choose date'),
  phone: Yup.string().required('Please enter phone'),
  major: Yup.string().required('Please enter major'),
});
