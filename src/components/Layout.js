import { makeStyles } from "@material-ui/core";
import Header from "./Header";

function Layout(props) {
  const classes = useStyles();

   return (<div className={classes.root}>
    <Header />
    {props.children}
  </div>);
}

export default Layout;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));