import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import UpdateSection from './update-section';
// import DeleteSection from './delete-section';
import { useSelector } from "react-redux";
import moment from "moment";
import ApprovedButtonSection from "./approve-button-section";
// import { Visibility } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';

export default function TableSection() {
    const { loan_records } = useSelector((state) => state.loan_records);
    console.log("loan_records", loan_records);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Fullname</TableCell>
                        <TableCell>Loan ID</TableCell>
                        <TableCell>Desired Amount</TableCell>
                        <TableCell>Net</TableCell>
                        <TableCell>Interest</TableCell>
                        <TableCell>Bi Amortization</TableCell>
                        <TableCell>Term</TableCell>
                        <TableCell>Balance</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loan_records?.data?.map((res, i) => {
                        const dob = moment(res.dob, "YYYY-MM-DD"); // Replace with actual date of birth
                        const age = moment().diff(dob, "years");
                        return (
                            <TableRow
                                key={i}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell>
                                    {res.user.employee_fname}{" "}
                                    {res.user.employee_lname}
                                </TableCell>
                                <TableCell>{res.loan_record_id}</TableCell>
                                <TableCell>
                                    {res?.desired_amount ?? ""}
                                </TableCell>
                                <TableCell>{res?.net ?? ""}</TableCell>

                                <TableCell>{res.interest}</TableCell>
                                <TableCell>
                                    {res.bi_amortization.toFixed(2)}
                                </TableCell>
                                <TableCell>{res.term} Months</TableCell>
                                <TableCell>{res.balance}</TableCell>
                                <TableCell>{res.status}</TableCell>
                                <TableCell>
                                    <ApprovedButtonSection data={res} />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
