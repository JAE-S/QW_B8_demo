// Import React & Dependencies
// =========================================================
  import React from 'react';
  import PropTypes from 'prop-types';
// Import Material UI Components
// =========================================================
  import { makeStyles } from '@material-ui/core/styles';
  import AppBar from '@material-ui/core/AppBar';
  import Tabs from '@material-ui/core/Tabs';
  import Tab from '@material-ui/core/Tab';
  import Typography from '@material-ui/core/Typography';
  
  import Box from '@material-ui/core/Box';
// Import Components
// =========================================================
  // import LandingPage from "../../Pages/Input_lines"
// Import Styling
// =========================================================
  import "./style.css"

// Tab Panel Function 
// =========================================================
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
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
      id: `wrapped-tab-${index}`,
      'aria-controls': `wrapped-tabpanel-${index}`,
    };
  }
// Styling 
// =========================================================
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

// Default Tab Navigation Funstion 
// =========================================================
  export default function TabsWrappedLabel(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}   variant="fullWidth" aria-label="wrapped label tabs example">
            <Tab
              value="one"
              label="Input - Lines"
              wrapped
              {...a11yProps('one')}
            />
            <Tab 
              value="two" 
              label="Output - DC Summary" 
              wrapped 
              {...a11yProps('two')} 
            />
            <Tab 
              value="three" 
              label="Output - DC Store Size Summary"
              wrapped 
              {...a11yProps('three')} 
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index="one">
          {props.inputRows}
        </TabPanel>
        <TabPanel value={value} index="two">
          {props.dcSumRows}
        </TabPanel>
        <TabPanel value={value} index="three">
          {props.sizeSumRows}
        </TabPanel>
      </div>
    );
  }