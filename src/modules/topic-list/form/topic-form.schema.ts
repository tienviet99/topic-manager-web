import * as Yup from 'yup';

export const topicSchema = Yup.object().shape({
  topicId: Yup.string().required('Please enter Topic ID'),
  // name: Yup.string().required('Please enter name'),
  // // major: Yup.string().required('Please enter major'),
  // start_Date: Yup.string().required('Please choose start Date'),
  // end_Date: Yup.string().required('Please choose end Date'),
  // description: Yup.string().required('Please enter description'),
  teacherName: Yup.string().required('Please enter teacher'),
  // link: Yup.string().required('Please enter link'),
});
