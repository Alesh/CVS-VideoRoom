import React from 'react';
import { Redirect } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import './styles/App.css';
import SignUp from './forms/SignUp';
import Login from './forms/Login';

interface Props {
  tabIndex: number;
}

function Welcome(props: Props) {
  const [tabIndex, setTabIndex] = React.useState(-1);
  return (
    <Tabs selectedIndex={tabIndex >= 0 ? tabIndex : props.tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>
          I have
          <br />
          an&nbsp;account
        </Tab>
        <Tab>
          I have not
          <br />
          an&nbsp;account
        </Tab>
        <Tab>
          I have
          <br />
          a&nbsp;call&nbsp;link
        </Tab>
      </TabList>
      <TabPanel>
        <Login />
        <Redirect to="/login" />
      </TabPanel>
      <TabPanel>
        <SignUp />
        <Redirect to="/signup" />
      </TabPanel>
      <TabPanel>
        <Redirect to="/haslink" />
      </TabPanel>
    </Tabs>
  );
}

export default Welcome;
