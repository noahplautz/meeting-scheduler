import React from 'react';
import FullCalendar from '@fullcalendar/react';
import PropTypes from 'prop-types';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Button } from '@material-ui/core';

// eslint-disable-next-line no-unused-vars
const Calender = ({ className, ...rest }) => {
  return (


    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={false}
      events={[
        { title: 'event 1', date: '2020-10-16' },
        { title: 'meeting 2', date: '2020-10-14' }

      ]}
    />

  );
};
Calender.propTypes = {
  className: PropTypes.string
};

export default Calender;
