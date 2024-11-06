import React from "react";
import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "@/app/redux/app-slice";

export default function NotificationSection() {
    const { notification } = useSelector((store) => store.app);
    const dispatch = useDispatch();

    function handleClose() {
        dispatch(
            setNotification({
                ...notification,
                open: false,
            }),
        );
    }
    return (
        <Snackbar
            open={notification.open}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <MuiAlert
                // onClose={handleClose}
                severity={notification.type}
                sx={{ width: "100%" }}
            >
                {notification.message}
            </MuiAlert>
        </Snackbar>
    );
}
