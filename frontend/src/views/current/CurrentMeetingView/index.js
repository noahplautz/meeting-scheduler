import React, { useRef, useState } from 'react';
import {
  Box, Button,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
// import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import Calender from './Calender';
import ReactToPrint, { useReactToPrint } from 'react-to-print';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));
const Example = () => {
  const componentRef = useRef();
};


const ProductList = () => {
  const classes = useStyles();
  // const [products] = useState(data);
  const componentRef = Example();

  return (
    <Page
      className={classes.root}
      title="Current Meetings"
    >
      <Container maxWidth={false}>
        <ReactToPrint
          trigger={() => <Button variant={'contained'}>Print</Button>}
          content={() => componentRef.current}/>
        <Calender />
      </Container>
    </Page>
  );
};

export default ProductList;
