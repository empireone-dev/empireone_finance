import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useState, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ApprovedButtonSection from "./approve-button-section";
import DeclinedButtonSection from "./declined-button-section";
import ReleaseButtonSection from "./release-section";

export default function ModalOptionSection({ data }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button color="primary" variant="outlined" onClick={handleClickOpen}>
                OPTION
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
                            <TableCell>
                                {data?.employee?.position ?? "NA"}
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
                    {/* <DeclinedButtonSection setOpen={setOpen} data={data} /> */}
                    <ReleaseButtonSection setOpen={setOpen} data={data} />
                    {/* <ApprovedButtonSection
                   setOpen={setOpen}
                   data={data} /> */}
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
