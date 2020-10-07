import React from "react";
// import DashboardLayout from 'src/layouts/DashboardLayout';
import DashboardLayout from 'src/layouts/DashboardLayout';
import CreateMeetingView from 'src/views/CreateMeetingView';
import CurrentMeetingView from 'src/views/CurrentMeetingView';
import SettingsView from 'src/views/SettingsView';


const routes = [
  {
    path: 'app',
    element: <DashboardLayout/>,
    children: [
      { path: 'createMeeting', element: <CreateMeetingView /> },
      { path: 'currentMeeting', element: <CurrentMeetingView /> },
      { path: 'settings', element: <SettingsView /> },
    ]
  },
]

export default routes;