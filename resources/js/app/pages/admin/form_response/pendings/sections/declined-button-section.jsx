import * as React from "react";
import Button from "@mui/material/Button";
import store from "@/app/pages/store/store";
import {
    get_loan_record_thunk,
    loan_change_status_thunk,
} from "@/app/redux/loan_record/loan-record-thunk";
import { useState, useRef } from "react";
import { setNotification } from "@/app/redux/app-slice";
import { useDispatch } from "react-redux";

export default function DeclinedButtonSection({ data,setOpen }) {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    async function approved_handler(e) {
        setLoading(true);
        try {
            // Update loan status to "Approved"
            await store.dispatch(
                loan_change_status_thunk({
                    ...data,
                    status: "Declined",
                }),
            );
            // Refresh loan records after status change
            await store.dispatch(get_loan_record_thunk());
            dispatch(
              setNotification({
                  open:true,
                  type:'error',
                  message:'Loan applicant has already been declined!'
                }),
          );
            setOpen(false)
            setLoading(false);
        } catch (error) {
            console.error("Error in approving loan:", error);
            setLoading(false);
        }
    }
    return (
        <Button
            color="error"
            disabled={loading}
            variant="contained"
            onClick={approved_handler}
            autoFocus
        >
            DECLINED
        </Button>
    );
}
