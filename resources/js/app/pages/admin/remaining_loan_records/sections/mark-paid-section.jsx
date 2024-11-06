import * as React from "react";
import Button from "@mui/material/Button";
import store from "@/app/pages/store/store";
import {
    get_loan_record_thunk,
    loan_change_status_thunk,
} from "@/app/redux/loan_record/loan-record-thunk";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setNotification } from "@/app/redux/app-slice";
import { pay_loan_record_thunk } from "@/app/redux/loan_record_payment/loan-record-payment-thunk";

export default function MarkPaidSection({ data }) {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    async function approved_handler(e) {
        if (window.confirm("Are you sure you want to mark it as paid?")) {
            setLoading(true);
            try {
                await store.dispatch(
                    pay_loan_record_thunk({
                        ...data,
                        status: "Paid",
                    }),
                );
                // Refresh loan records after status change
                await store.dispatch(get_loan_record_thunk());

                setLoading(false);
                dispatch(
                    setNotification({
                        open: true,
                        type: "success",
                        message: "Loan applicant has already been approved!",
                    }),
                );
            } catch (error) {
                console.error("Error in approving loan:", error);
                setLoading(false);
            }
        }
    }
    return (
        <>
            {data.status == "Unpaid" && (
                <Button
                    disabled={loading}
                    variant="contained"
                    onClick={approved_handler}
                    autoFocus
                    fullWidth
                >
                    MARK AS PAID
                </Button>
            )}
            {data.status == "Paid" && (
                <Button variant="contained" color="success" autoFocus fullWidth>
                    PAID
                </Button>
            )}
        </>
    );
}
