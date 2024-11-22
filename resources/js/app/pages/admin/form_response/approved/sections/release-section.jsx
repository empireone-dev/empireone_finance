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
import moment from "moment";

export default function ReleaseButtonSection({ data,setOpen }) {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    async function release_handler(e) {
        setLoading(true);
        try {
            // Update loan status to "Approved"
            await store.dispatch(
                loan_change_status_thunk({
                    ...data,
                    status: "Released",
                    released_at:moment().format('LLL')
                }),
            );
            // Refresh loan records after status change
            await store.dispatch(get_loan_record_thunk());
            setOpen(false)
            setLoading(false);
            dispatch(
                setNotification({
                    open:true,
                    type:'success',
                    message:'Loan applicant has already been release!'
                  }),
            );
        } catch (error) {
            console.error("Error in approving loan:", error);
            setLoading(false);
        }
    }
    return (
        <Button
            disabled={loading}
            variant="contained"
            onClick={release_handler}
            autoFocus
        >
            RELEASED
        </Button>
    );
}
