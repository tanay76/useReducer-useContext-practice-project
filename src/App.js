import React, { Fragment, useState } from "react";
import Layout from "./components/Layout";
import Login from "./components/Login";
import LoginModal, { ClickOpenButton } from "./components/LoginModal";

function App() {
  const [open, setOpen] = useState(false);

  function clickOpenHandler() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <Layout>
        <Login />
        {!open && <ClickOpenButton onClickOpen={clickOpenHandler} />}
        {open && (
          <LoginModal
            open={open}
            title="Alert:"
            message="Form not filled properly"
            onClose={handleClose}
            error={true}
          />
        )}
      </Layout>
    </Fragment>
  );
}

export default App;
