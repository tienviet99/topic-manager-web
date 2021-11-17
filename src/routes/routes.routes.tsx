import { ComponentType } from 'react';

import {
  Dashboard,
  Student,
  Teacher,
  TopicList,
  TopicUser,
  User,
} from 'pages';
import TopicCreate from 'pages/topic-list/create';
import TopicEdit from 'pages/topic-list/edit';
import StudentCreate from 'pages/students/create';
import StudentEdit from 'pages/students/edit';
import TeacherCreate from 'pages/teachers/create';
import TeacherEdit from 'pages/teachers/edit';
import TopicDetail from 'pages/topic-list/detail';
import TopicUserDetailTask from 'pages/topic-user/detail-task';
import Report from 'pages/topic-user/report';
import {
  PATH_STUDENT,
  PATH_TEACHER,
  PATH_TOPIC_LIST,
  PATH_TOPIC_CREATE,
  PATH_TOPIC_EDIT,
  PATH_TOPIC_USER,
  PATH_USER,
  PATH_STUDENT_CREATE,
  PATH_STUDENT_EDIT,
  PATH_TEACHER_CREATE,
  PATH_TEACHER_EDIT,
  PATH_TOPIC_DETAIL,
  PATH_TOPIC_USER_CONTAINER,
  PATH_REPORT,
} from './routes.path';

interface RouteModel {
  exact: boolean;
  path: string;
  component: ComponentType;
}

export const appRoutes: RouteModel[] = [
  {
    exact: true,
    path: '/',
    component: Dashboard,
  },
  {
    exact: true,
    path: PATH_STUDENT,
    component: Student,
  },
  {
    exact: true,
    path: PATH_STUDENT_CREATE,
    component: StudentCreate,
  },
  {
    exact: true,
    path: PATH_STUDENT_EDIT,
    component: StudentEdit,
  },
  {
    exact: true,
    path: PATH_TEACHER,
    component: Teacher,
  },
  {
    exact: true,
    path: PATH_TEACHER_CREATE,
    component: TeacherCreate,
  },
  {
    exact: true,
    path: PATH_TEACHER_EDIT,
    component: TeacherEdit,
  },
  {
    exact: true,
    path: PATH_TOPIC_LIST,
    component: TopicList,
  },
  {
    exact: true,
    path: PATH_TOPIC_CREATE,
    component: TopicCreate,
  },
  {
    exact: true,
    path: PATH_TOPIC_EDIT,
    component: TopicEdit,
  },
  {
    exact: true,
    path: PATH_TOPIC_DETAIL,
    component: TopicDetail,
  },
  {
    exact: true,
    path: PATH_TOPIC_USER,
    component: TopicUser,
  },
  {
    exact: true,
    path: PATH_TOPIC_USER_CONTAINER,
    component: TopicUserDetailTask,
  },
  {
    exact: true,
    path: PATH_REPORT,
    component: Report,
  },
  {
    exact: true,
    path: PATH_USER,
    component: User,
  },
];
