import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import AssignmentIcon from '@material-ui/icons/Assignment';

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
      <ListItemText primary="Create Meeting" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CalendarViewDayIcon />
      </ListItemIcon>
      <ListItemText primary="Current Meetings" />
    </ListItem>
    <ListItem button>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Candidate" />
        </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings"/>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset></ListSubheader>
    <ListItem button>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      <ListItemText primary="" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      <ListItemText primary="" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      <ListItemText primary="" />
    </ListItem>
  </div>
);