import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
// import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import Calender from './Calender';

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

const ProductList = () => {
  const classes = useStyles();
  // const [products] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Current Meetings"
    >
      <Container maxWidth={false}>
        <Calender />
      </Container>
    </Page>
  );
};

export default ProductList;
