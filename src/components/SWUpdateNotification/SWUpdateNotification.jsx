import React, { useEffect, useState, useRef } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import UpdateIcon from "@mui/icons-material/Update";
import Slide from "@mui/material/Slide";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export function SWUpdateNotification() {
  const { needRefresh, updateServiceWorker } = useRegisterSW({
    onRegistered(r) {
      console.log("Service Worker registrado", r);
    },
    onRegisterError(error) {
      console.error("Error registrando el Service Worker", error);
    },
  });

  const [show, setShow] = useState(false);
  const shownOnce = useRef(false);

  useEffect(() => {
    if (needRefresh && !shownOnce.current) {
      setShow(true);
      shownOnce.current = true;
    }
  }, [needRefresh]);

  if (!show) return null;

  const handleClose = () => {
    setShow(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => updateServiceWorker(true)}
      >
        <UpdateIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={show}
      onClose={handleClose}
      slots={{ transition: SlideTransition }}
      message="Actualización disponible"
      autoHideDuration={8000}
      action={action}
    />
  );
}
