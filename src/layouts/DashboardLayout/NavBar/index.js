import React, {useEffect} from "react";
import {Link as RouterLink, useLocation} from "react-router";
import PropTypes from 'prop-types'
import { Box, Button, Divider, Drawer, Hidden, List, Typography, makeStyles} from "@material-ui/core";
import {AlertCircle as AlertCircleIcon,   BarChart as BarChartIcon, Lock as LockIcon, Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon, User as UserIcon, UserPlus as UserPlusIcon, Users as UsersIcon} from 'react-feather';
import NavItem from "./NavItem";
import {Dashboard, CalendarToday, CalendarViewDay, Settings, ExitToApp} from "@material-ui/icons";

const items = [
  {
    href: '/app/dashboard',
    icon: Dashboard,
    title: 'Dashboard'
  },
  {
    href: '/app/createmeeting',
    icon: CalendarToday,
    title: 'Create Meeting'
  },
  {
    href: '/app/currentmeetings',
    icon: CalendarViewDay,
    title: 'Current Meetings'
  },
  {
    href: '/app/settings',
    icon: Settings,
    title: 'Settings'
  },
  {
    href: '/app/signout',
    icon: ExitToApp,
    title: 'Sign Out'
  }
];

const useStyles = makeStyles(() => ({

}));

const NavBar = ({ onMobileClose, openMobile}) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box p={2}>
      <List>
        {items.map((item) => (
          <NavItem
            href={item.href}
            key={item.title}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor={"left"}
          classes={{paper: classes.mobileDrawer}}
          onClose={onMobileClose}
          open={openMobile}
          variant={"temporary"}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;