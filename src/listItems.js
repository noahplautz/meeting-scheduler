import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {render} from "react-dom";
import CreateMeeting from "./views/CreateMeetingView/CreateMeeting";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
        <ListItemText primary="Create Meeting"/>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <CalendarViewDayIcon />
      </ListItemIcon>
      <ListItemText primary="Current Meetings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings"/>
    </ListItem>
    <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out"/>
        </ListItem>
  </div>
);

function CreateMeetingFunc() {

  // return (
  //   <Link to="/CreateMeeting"></Link>
  // );
  alert("Hello");



}