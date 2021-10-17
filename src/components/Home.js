import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Home() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h4" component="h2" color="secondary">
          WELCOME
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' color='secondary'>Logout</Button>
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 550,
    minHeight: 300,
    marginTop: 200
  },
  pos: {
    marginBottom: 12,
  },
});