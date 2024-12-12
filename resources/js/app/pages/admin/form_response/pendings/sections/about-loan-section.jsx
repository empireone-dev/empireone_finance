import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";

export default function AboutLoanSection({data}) {
  const salary = parseFloat(data?.employee?.salary?.budgetCost) * 0.8;
  return (
    <Table aria-label="simple table">
    <TableHead>
        <TableRow>
            <TableCell>
                <div className="font-black">
                    Loan Information (PENDING)
                </div>
            </TableCell>
            <TableCell align="right"></TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow
            sx={{
                "&:last-child td, &:last-child th":
                    {
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
                "&:last-child td, &:last-child th":
                    {
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
                "&:last-child td, &:last-child th":
                    {
                        border: 0,
                    },
            }}
        >
            <TableCell component="th" scope="row">
                Desired Amount
            </TableCell>
            <TableCell>
                ₱ {data?.desired_amount ?? 0}
            </TableCell>
        </TableRow>
        <TableRow
            sx={{
                "&:last-child td, &:last-child th":
                    {
                        border: 0,
                    },
            }}
        >
            <TableCell component="th" scope="row">
                Maximum loan amount.(amount 80% of
                basic salary).
            </TableCell>
            <TableCell>
                ₱ {salary ?? 9600}
            </TableCell>
        </TableRow>
        <TableRow
            sx={{
                "&:last-child td, &:last-child th":
                    {
                        border: 0,
                    },
            }}
        >
            <TableCell component="th" scope="row">
                Term
            </TableCell>
            <TableCell>
                {data?.term} months
            </TableCell>
        </TableRow>
        <TableRow
            sx={{
                "&:last-child td, &:last-child th":
                    {
                        border: 0,
                    },
            }}
        >
            <TableCell component="th" scope="row">
                Interest
            </TableCell>
            <TableCell>
                ₱ {data?.interest}
            </TableCell>
        </TableRow>
        <TableRow
            sx={{
                "&:last-child td, &:last-child th":
                    {
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
                "&:last-child td, &:last-child th":
                    {
                        border: 0,
                    },
            }}
        >
            <TableCell component="th" scope="row">
                Bi-Monthly Amortization
            </TableCell>
            <TableCell>
                ₱ {data?.bi_amortization.toFixed(2)}
            </TableCell>
        </TableRow>
    </TableBody>
</Table>
  )
}
