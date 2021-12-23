import * as Yup from 'yup';

export const topicSchema = Yup.object().shape({
  topicId: Yup.string()
    .required('Please enter Topic ID')
    .matches(
      /(TP)+[1234567890]/,
      'TopicId must start with TP + number',
    ),
  name: Yup.string()
    .required('Please enter name')
    .max(150, 'Name must be less than 150 words'),
  major: Yup.string().required('Please choose major'),
  start_date: Yup.string().required('Please choose start Date'),
  end_date: Yup.string().required('Please choose end Date'),
  description: Yup.string()
    .required('Please enter description')
    .max(1000, 'Description must be less than 1000 words'),
  teacherId: Yup.string().required('Please enter teacher'),
  link: Yup.string().required('Please enter link').url('Link is URL'),
});
