import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import store from "@/app/pages/store/store";
import {
    get_loan_record_thunk,
    loan_change_status_thunk,
} from "@/app/redux/loan_record/loan-record-thunk";
import { useState, useRef } from "react";
import { Alert, Backdrop, CircularProgress } from "@mui/material";
import { Check, TaskAlt } from "@mui/icons-material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ApprovedButtonSection({ data }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function approved_handler(e) {
        setLoading(true);
        setSuccess(false); // Reset success state when starting the process

        try {
            // Update loan status to "Approved"
            await store.dispatch(
                loan_change_status_thunk({
                    ...data,
                    status: "Approved",
                }),
            );
            setOpen(false);
            // Refresh loan records after status change
            await store.dispatch(get_loan_record_thunk());
            setLoading(false);
        } catch (error) {
            console.error("Error in approving loan:", error);
            setLoading(false);
        }
    }
    console.log("datadata", data);
    return (
        <React.Fragment>
            <Backdrop
                sx={(theme) => ({
                    color: "#fff",
                    zIndex: theme.zIndex.drawer + 1,
                })}
                open={loading}
            >
                {success && <CircularProgress color="inherit" />}
            </Backdrop>
            <Button variant="outlined" onClick={handleClickOpen}>
                APPROVE
            </Button>
            <Dialog
                fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <div className="font-black">
                                    Loan Information (PENDING)
                                </div>
                            </TableCell>
                            <TableCell align="right">
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={handleClose}
                                    aria-label="close"
                                >
                                    <CloseIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                Fullname
                            </TableCell>
                            <TableCell>
                                {data.user.employee_fname}{" "}
                                {data.user.employee_lname}
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                Position
                            </TableCell>
                            <TableCell>{data.employee.position}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                Desired Amount
                            </TableCell>
                            <TableCell>₱ {data.desired_amount ?? 0}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                Term
                            </TableCell>
                            <TableCell>{data.term} months</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                Interest
                            </TableCell>
                            <TableCell>₱ {data.interest}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                Net
                            </TableCell>
                            <TableCell>₱ {data.net}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                Bi-Monthly Amortization
                            </TableCell>
                            <TableCell>
                                ₱ {data.bi_amortization.toFixed(2)}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="error"
                        variant="contained"
                    >
                        DECLINED
                    </Button>
                    <Button
                        disabled={loading}
                        variant="contained"
                        onClick={approved_handler}
                        autoFocus
                    >
                        APPROVED
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
