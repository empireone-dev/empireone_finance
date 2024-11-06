import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

export default function RequestCalculationSection({
    form,
    setForm,
    handleClose,
    user
}) {
    return (
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>
                        <div className="font-black">Loan Information</div>
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
                        {user.employee_fname} {user.employee_lname}
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
                    <TableCell>₱ {form.desired_amount ?? 0}</TableCell>
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
                    <TableCell>{form.term} months</TableCell>
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
                    <TableCell>₱ {form.interest}</TableCell>
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
                    <TableCell>₱ {form.net}</TableCell>
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
                    <TableCell>₱ {form.bi_amortization.toFixed(2)}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
