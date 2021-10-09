import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import ReactDOM from "react-dom";
import { Divider, makeStyles } from "@material-ui/core";
import { theme } from "../theme/theme";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export function ClickOpenButton(props) {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={props.onClickOpen}>
        Slide in alert dialog
      </Button>
    </div>
  );
}

export function Modal(props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          id="alert-dialog-slide-title"
          style={{
            backgroundColor: theme.palette.secondary.main,
            color: "#fff",
          }}
        >
          {props.title}
        </DialogTitle>
        <Divider />
        <DialogContent className={classes.dialogContainer}>
          <DialogContentText
            id="alert-dialog-slide-description"
            style={{
              color: props.error
                ? theme.palette.error.main
                : theme.palette.success.main,
            }}
          >
            {props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={props.onClose} color="secondary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default function LoginModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal
          open={props.open}
          title={props.title}
          message={props.message}
          onClose={props.onClose}
          error={props.error}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  dialogContainer: {
    width: theme.spacing(64),
  },
}));
