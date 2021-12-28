import * as Yup from 'yup';

export const userSchema = Yup.object({
  userId: Yup.string()
    .required('Please enter user ID')
    .matches(
      /((TP)|(CT)|(AT)|(DT)|(GV))+[1234567890]/,
      'User Id must start with TP/CT/AT/DT/GV + number',
    ),
  name: Yup.string()
    .required('Please enter name')
    .max(150, 'Name must be less than 150 words'),
  date: Yup.string().required('Please choose date'),
  major: Yup.string().required('Please choose major'),
  phone: Yup.string().required('Please enter phone'),
});
