import React from 'react';
import Dashboard from "./Dashboard";
import Page from "../../components/Page";

const Home = () => {
  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Dashboard/>
    </Page>

  )
}

export default Home;