import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  function changeHandler(event, value) {
    setValue(value);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Typography variant="h6" style={{ cursor: "pointer" }}>
              Typical React App
            </Typography>
            <Tabs
              value={value}
              className={classes.tabsContainer}
              onChange={changeHandler}
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                disableRipple
                label="Home"
                component={Link}
                to="/"
              />
              <Tab
                className={classes.tab}
                disableRipple
                label="Admin"
                component={Link}
                to="/admin"
              />
              <Tab
                className={classes.tab}
                disableRipple
                label="Login"
                component={Link}
                to="/login"
              />
              <Tab className={classes.tab} disableRipple label="Logout" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    minHeight: "6rem",
  },
  toolBar: {
    minHeight: "6rem",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
  },
  tabsContainer: {
    marginLeft: "auto",
    color: "#fff",
    textDecoration: "none",
  },
  tab: {
    textTransform: "none",
    textDecoration: "none",
    marginLeft: "8px",
    fontSize: "1rem",
    minWidth: "1.5rem",
  },
}));
