import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useState, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MarkPaidSection from "./mark-paid-section";

export default function ModalOptionSection({ data }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let sortedData = [];
    if (data?.loan_records) {
        sortedData = [...data?.loan_records].sort((a, b) => {
            const dateA = new Date(a.due_date);
            const dateB = new Date(b.due_date);
            return dateA - dateB;
        });
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen} fullWidth>
                PAYMENT
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
                                    Loan Information (CHECK PAYMENT)
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
                                {data?.user.employee_fname}{" "}
                                {data?.user.employee_lname}
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
                            <TableCell>₱ {data?.desired_amount ?? 0}</TableCell>
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
                            <TableCell>{data?.term} months</TableCell>
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
                            <TableCell>₱ {data?.interest}</TableCell>
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
                            <TableCell>₱ {data?.net}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                Balance
                            </TableCell>
                            <TableCell>₱ {data?.balance.toFixed(2)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Table aria-label="simple table">
                    <TableRow
                        sx={{
                            "&:last-child td, &:last-child th": {
                                border: 0,
                            },
                        }}
                    >
                        <TableCell component="th" scope="row">
                            Due Date
                        </TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                    {sortedData.map((ress, i) => {
                        return (
                            <TableRow
                                key={i}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {ress.due_date}
                                </TableCell>
                                <TableCell>
                                    ₱ {data?.bi_amortization.toFixed(2)}
                                </TableCell>
                                <TableCell>
                                    <MarkPaidSection data={ress} />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </Table>
            </Dialog>
        </React.Fragment>
    );
}
