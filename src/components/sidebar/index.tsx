import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Collapse, Divider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TopicIcon from '@mui/icons-material/Topic';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import {
  PATH_STUDENT,
  PATH_TEACHER,
  PATH_TOPIC_LIST,
  PATH_TOPIC_USER,
  PATH_USER,
} from 'routes/routes.path';
import { getProfile } from 'store/user/action';
import styles from './sidebar.module.css';

export default function Sidebar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { profile }: any = useSelector(
    (state: RootState) => state.user,
  );
  const infoUser: any = JSON.parse(
    `${localStorage.getItem('infoUser')}`,
  );
  const profileUser: any = Object(profile[0]);
  const renderSwitch = (param: number): string => {
    switch (param) {
      case 0:
        return 'Student';
      case 1:
        return 'Teacher';
      case 2:
        return 'Admin';
      default:
        return 'Student';
    }
  };

  useEffect(() => {
    dispatch(getProfile(infoUser._id));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-64 px-4 bottom-0 ">
      <div className="my-7 text-4xl text-center">
        <Link to="/" className="flex justify-center">
          <Box className="font-mono text-6xl text-white">KMA</Box>
        </Link>
      </div>
      <nav className="pt-3 text-center">
        <NavLink
          exact
          activeClassName={styles.active_link}
          to="/"
          className="text-white flex py-4 cursor-pointer text-md text-left mx-2 rounded-2xl hover: transition-all mb-1 relative"
        >
          <div className={styles.button}> </div>
          <Box className="mx-2 flex">
            <DashboardIcon />
            <Box className="ml-2">Dashboard</Box>
          </Box>
        </NavLink>
        <Link
          to={PATH_TOPIC_LIST}
          className="text-white flex py-4 cursor-pointer text-md text-left mx-2 rounded-2xl hover: transition-all mb-1 relative"
          onClick={() => setOpen(!open)}
        >
          <div className={styles.button}> </div>
          <Box className="mx-2 flex justify-between w-full">
            <Box className="flex">
              <ViewListIcon />
              <Box className="ml-2">Topic</Box>
            </Box>
            <Box className="">
              {open ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </Box>
          </Box>
        </Link>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <NavLink
            activeClassName={styles.active_link}
            to={PATH_TOPIC_LIST}
            className="text-white flex py-4 cursor-pointer text-md text-left mx-2 rounded-2xl hover: transition-all mb-1 relative"
          >
            <div className={styles.button}> </div>
            <Box className="mx-2 ml-5 flex">
              <ListAltIcon />
              <Box className="ml-2">List Topic</Box>
            </Box>
          </NavLink>
          <NavLink
            activeClassName={styles.active_link}
            to={PATH_TOPIC_USER}
            className="text-white flex py-4 cursor-pointer text-md text-left mx-2 rounded-2xl hover: transition-all mb-1 relative"
          >
            <div className={styles.button}> </div>
            <Box className="mx-2 ml-5 flex">
              <TopicIcon />
              <Box className="ml-2">My Topic</Box>
            </Box>
          </NavLink>
          <Box className="mx-7">
            <Divider className="bg-white" />
          </Box>
        </Collapse>
        <NavLink
          activeClassName={styles.active_link}
          to={PATH_STUDENT}
          className="text-white flex py-4 cursor-pointer text-md text-left mx-2 rounded-2xl hover: transition-all mb-1 relative"
        >
          <div className={styles.button}> </div>
          <Box className="mx-2 flex">
            <PeopleIcon />
            <Box className="ml-2">Student</Box>
          </Box>
        </NavLink>
        <NavLink
          activeClassName={styles.active_link}
          to={PATH_TEACHER}
          className="text-white flex py-4 cursor-pointer text-md text-left mx-2 rounded-2xl hover: transition-all mb-1 relative"
        >
          <div className={styles.button}> </div>
          <Box className="mx-2 flex">
            <PeopleOutlineIcon />
            <Box className="ml-2">Teacher</Box>
          </Box>
        </NavLink>
      </nav>
      <nav className=" absolute bottom-0 pb-5 w-11/12 text-center">
        <NavLink
          activeClassName={styles.active_link}
          to={PATH_USER}
          className="text-white flex py-4 cursor-pointer text-md text-left mx-2 rounded-2xl hover: transition-all mb-1 relative"
        >
          <div className={styles.button}> </div>
          <Box className="mx-2 flex">
            <Box>
              <AccountBoxIcon style={{ fontSize: '50px' }} />
            </Box>
            <Box className="ml-2">
              <Box>{profileUser.name ? profileUser.name : null}</Box>
              <Box>{renderSwitch(profileUser.role)}</Box>
            </Box>
          </Box>
        </NavLink>
      </nav>
    </div>
  );
}
