import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
 Box, Button, Table, TableHead, TableRow, TableCell, TableBody, Card, CardHeader, withStyles
} from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {},
  table: {
    minWidth: 650,
  },
}));
const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#3f51b5',
    color: 'white',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
// function createData(name, email, updocs, schedule, action) {
//   return {
//     name, email, updocs, schedule, action
//   };
// }
// const rows = [
//   createData('John Smith', 'johnsmith@gmail.com', 'Resume, CV', 'Create/View/Delete', 'Edit/Delete'),
//   createData('Jane Doe', 'jd@gmailcom', 'Resume', 'Create/View/Delete', 'Edit/Delete'),
//   createData('Kyle Drywall', 'kylemonster@gmail.com', 'CV', 'Create/View/Delete', 'Edit/Delete'),
//   createData('Chad Greek', 'delta_kappa@greeklife.com', 'None', 'Create/View/Delete', 'Edit/Delete'),
//   createData('Eddie Van Halen', 'vanhalen@gmail.com', 'Resume, CV', 'Create/View/Delete', 'Edit/Delete'),
// ];

const data = [
  {
    id: uuid(),
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    upDocs: 'Resume, CV',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
  {
    id: uuid(),
    name: 'Jane Doe',
    email: 'jd@gmailcom',
    upDocs: 'Resume',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
  {
    id: uuid(),
    name: 'Kyle Drywall',
    email: 'kylemonster@gmail.com',
    upDocs: 'Resume, CV',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
  {
    id: uuid(),
    name: 'Chad Greek',
    email: 'delta_kappa@greeklife.com',
    upDocs: 'None',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
  {
    id: uuid(),
    name: 'Eddie Van Halen',
    email: 'vanhalen@gmail.com',
    upDocs: 'Resume, CV',
    schedule: 'Create/View/Delete',
    action: 'Edit/Delete'
  },
];
const MeetingTable = ({ className, ...rest }) => {
  const classes = useStyles();
  const [people] = useState(data);
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title='Meetings' />

        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Candidate Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Uploaded Documents</TableCell>
                <TableCell>Meeting Schedule</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {people.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>{order.name}</TableCell>
                  <TableCell>{order.email}</TableCell>
                  <TableCell>{order.upDocs}</TableCell>
                  <TableCell>{order.schedule}</TableCell>
                  <TableCell>{order.action}</TableCell>
                </TableRow>

              ))}
            </TableBody>
          </Table>
        </Box>

    </Card>
    // <TableContainer>
    //   <text>Meeting Scheduling for Position</text>
    //   <text>Name: Lecturer; ID: 2987987; Department: Phy</text>
    //   <Button variant="contained" color="primary">Add New Candidate</Button>
    //   <Button variant="contained" color="primary">View All Meeting Schedules</Button>
    //   <p> </p>
    //   {/* eslint-disable-next-line no-undef */}
    //   <Table className={classes.table}>
    //     <TableHead>
    //       <TableRow>
    //         <StyledTableCell>Candidate Name</StyledTableCell>
    //         <StyledTableCell align="right">Email</StyledTableCell>
    //         <StyledTableCell align="right">Uploaded Documents</StyledTableCell>
    //         <StyledTableCell align="right">Meeting Schedule</StyledTableCell>
    //         <StyledTableCell align="right">Action</StyledTableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <StyledTableRow key={row.name}>
    //           <TableCell component="th" scope="row">
    //             {row.name}
    //           </TableCell>
    //           <TableCell align="right">{row.email}</TableCell>
    //           <TableCell align="right">{row.updocs}</TableCell>
    //           <TableCell align="right">{row.schedule}</TableCell>
    //           <TableCell align="right">{row.action}</TableCell>
    //         </StyledTableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    //   <br />
    //
    //   <Button variant="contained" color="primary">Add a Position</Button>
    //   <br />
    // </TableContainer>
  );
};

MeetingTable.propTypes = {
  className: PropTypes.string
};

export default MeetingTable;
