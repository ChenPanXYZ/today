import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Creation from './Creation'
import Request from './Request'
import Frozen from './Frozen'
import All from './All'
import Feedback from './Feedback'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Admin() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // lATE WE WILL FETCH ALL THE DATA FROM THE SERVER.

  // Recent Creation.
  const [creation, setCreation] = React.useState(
      [
          {id: 1, user: "Tom", date: "2020-03-03"},
          {id: 2, user: "Jack", date: "2020-03-02"},
      ]
  )

  // Recent Creation.
  const [request, setRequest] = React.useState(
      [
          {id: 3, user: "Lucy", reason: "I forgot my passowrd", date: "2020-03-03"},
          {id: 4, user: "Maria", reason: "I registered my account last month.", date: "2020-03-02"},
        ]
    )


  // Frozen.
  const [frozen, setFrozen] = React.useState(
    [
        {id: 5, user: "Peter", reason: "Sending spam emails"},
      ]
  )

  // All Active Accounts.
  const [all, setAll] = React.useState(
    [
        {id: 1, user: "Tom"},
        {id: 2, user: "Jack"},
        {id: 3, user: "Lucy"},
        {id: 4, user: "Maria"},
      ]
  )

  // All Active Accounts.
  const [feedback, setFeedback] = React.useState(
    [
        {id: 1, user: "Jack", content: "Good"},
        {id: 2, user: "Jack", content: "Wonderful"},
        {id: 3, user: "Lucy", content: "So so"},
      ]
  )

  const removeFromScreen = (index, method, data) => {
    const newData = [...data];
    newData.splice(index, 1);
    console.log(newData)
    method(newData);
}



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="Admin Page Tabs"
        >
          <LinkTab label="Recent Creations" href="/" {...a11yProps(0)} />
          <LinkTab label="Requests" href="/" {...a11yProps(1)} />
          <LinkTab label="Frozen Accounts" href="/" {...a11yProps(2)} />
          <LinkTab label="All Accounts" href="/" {...a11yProps(3)} />
          <LinkTab label="Feedbacks" href="/" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Creation removeFromScreen = {removeFromScreen} creation={creation} setCreation={setCreation}></Creation>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Request removeFromScreen = {removeFromScreen} request={request} setRequest={setRequest}></Request>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Frozen removeFromScreen = {removeFromScreen} frozen={frozen} setFrozen={setFrozen}></Frozen>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <All removeFromScreen = {removeFromScreen} all={all} setAll={setAll}></All>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Feedback removeFromScreen = {removeFromScreen} feedback={feedback} setFeedback={setFeedback}></Feedback>
      </TabPanel>
    </div>
  );
}
