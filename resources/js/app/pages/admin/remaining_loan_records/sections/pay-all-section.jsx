import store from "@/app/pages/store/store";
import { setNotification } from "@/app/redux/app-slice";
import { get_loan_record_thunk } from "@/app/redux/loan_record/loan-record-thunk";
import { pay_loan_record_thunk } from "@/app/redux/loan_record_payment/loan-record-payment-thunk";

import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function PayAllSection({ data }) {
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    async function submit_form(params) {
        if (window.confirm("Are you sure you want to mark it as paid?")) {
            setLoading(true);
            try {
                await store.dispatch(
                    pay_loan_record_thunk({
                        ...data,
                        ...form,
                        status: "Pay All",
                    }),
                );
                // Refresh loan records after status change
                await store.dispatch(get_loan_record_thunk());

                setLoading(false);
                dispatch(
                    setNotification({
                        open: true,
                        type: "success",
                        message: "Loan applicant has already been paid!",
                    }),
                );
            } catch (error) {
                console.error("Error in approving loan:", error);
                setLoading(false);
            }
        }
    }
    console.log("formform", {
        ...data,
        ...form,
        status: "Pay All",
    });
    console.log("formform", form);
    return (
        <div className="flex w-full flex-col gap-3">
            <TextField
                onChange={(e) =>
                    setForm({
                        ...form,
                        [e.target.name]: e.target.value,
                    })
                }
                error={error?.pay_all ? true : false}
                helperText={error?.pay_all ?? ""}
                name="pay_all"
                type="number"
                label="Full Amount"
                variant="outlined"
                fullWidth
            />

            <FormControl
                fullWidth
                //  error={(!!error?.purpose ?? "")}
            >
                <InputLabel id="demo-simple-select-label">
                    Reason for Paying the Full Amount
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="reason"
                    label="Reason for Paying the Full Amount"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            [e.target.name]: e.target.value,
                        })
                    }
                    value={form.reason ?? ""}
                >
                    <MenuItem selected disabled></MenuItem>
                    <MenuItem value="Resignation">Resignation</MenuItem>
                    <MenuItem value="Dismissal">Dismissal</MenuItem>
                    <MenuItem value="Terminated">Terminated</MenuItem>
                    <MenuItem value="End of Contract">End of Contract</MenuItem>
                    <MenuItem value="End of Probationary Employment">
                        End of Probationary Employment
                    </MenuItem>
                    <MenuItem value="Absent Without Offical Leave">
                        Absent Without Offical Leave
                    </MenuItem>
                </Select>
                {error?.purpose && (
                    <FormHelperText>{error.purpose}</FormHelperText>
                )}
            </FormControl>
            <TextField
                onChange={(e) =>
                    setForm({
                        ...form,
                        [e.target.name]: e.target.value,
                    })
                }
                error={error?.notes ? true : false}
                helperText={error?.notes ?? ""}
                name="notes"
                multiline
                rows={4}
                type="number"
                label="Notes"
                variant="outlined"
                fullWidth
            />
            <Button
                disabled={loading}
                variant="contained"
                onClick={submit_form}
            >
                SUBMIT
            </Button>
        </div>
    );
}
