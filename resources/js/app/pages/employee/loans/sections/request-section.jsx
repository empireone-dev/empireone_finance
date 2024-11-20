import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import RequestCalculationSection from "./request-calculation-section";
import store from "@/app/pages/store/store";
import {
    get_loan_record_by_id_thunk,
    get_loan_record_thunk,
    store_loan_record_thunk,
} from "@/app/redux/loan_record/loan-record-thunk";

export default function RequestSection() {
    const [open, setOpen] = React.useState(false);
    const [form, setForm] = useState({
        term: 3,
        desired_amount: null,
        interest: 0,
        net: 0,
        bi_amortization: 0,
        interest_rate: 0.05,
        schedule: [],
    });
    const [amortizationSchedule, setAmortizationSchedule] = useState([]);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((store) => store.app);

    function generateAmortizationSchedule(
        initialPayment,
        finalPayment,
        durationMonths,
        numberOfPayments,
    ) {
        const startDate = moment().date(10); // Start from the 10th of the current month
        const paymentDecrease =
            (initialPayment - finalPayment) / (numberOfPayments - 1);
        let paymentAmount = initialPayment;

        const schedule = [];

        for (let i = 0; i < numberOfPayments; i++) {
            // Alternate between the 10th and 25th of each month
            const paymentDate = startDate
                .clone()
                .add(Math.floor(i / 2), "months")
                .date(i % 2 === 0 ? 10 : 25);
            schedule.push({
                date: paymentDate.format("LL"),
                // payment: paymentAmount.toFixed(2)
                payment: finalPayment.toFixed(2),
            });
            paymentAmount = Math.max(
                finalPayment,
                paymentAmount - paymentDecrease,
            );
        }

        return schedule;
    }

    useEffect(() => {
        const schedule = generateAmortizationSchedule(
            form.net,
            form.bi_amortization,
            form.term,
            6,
        );
        setForm({
            ...form,
            interest:
                (form.desired_amount ?? 0) *
                (form.interest_rate ?? 0) *
                (form.term ?? 0),
            net:
                (form.desired_amount ?? 0) -
                (form.desired_amount ?? 0) *
                    (form.interest_rate ?? 0) *
                    (form.term ?? 0),
            bi_amortization: (form.desired_amount ?? 0) / (form.term ?? 1) / 2, // 2 = Bi-Monthly Amortization ,
            schedule,
            ...user,
            balance:form.desired_amount,
        });
    }, [form?.desired_amount ?? ""]);

    console.log("form", form);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function desired_amount_function(e) {
        setForm({
            ...form,
            [e.target.name]: Number(e.target.value),
        });
    }

    async function submit_form(params) {
        try {
            setLoading(true);
            const result = await store.dispatch(
                store_loan_record_thunk({
                    ...form,
                    loan_record_id: moment().format("MMDDYYYYHHmmss"),
                    status: "Pending",
                }),
            );
            if (result.status == 200) {
                store.dispatch(get_loan_record_by_id_thunk(user.employee_id));
                setLoading(false);
                setOpen(false);
                setError({})
                setForm({
                    term: 3,
                    desired_amount: 0,
                    interest: 0,
                    net: 0,
                    bi_amortization: 0,
                    interest_rate: 0.05,
                    schedule: [],
                });
            } else {
                if (result?.response?.data?.errors) {
                    setError(result.response.data.errors);
                } else {
                    console.log("result", result);
                    setError({
                        notification:result.data.response
                    });

                    setTimeout(() => {
                        setError({});
                    }, 2000);
                }
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create Loan Request
            </Button>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <RequestCalculationSection
                    handleClose={handleClose}
                    user={user}
                    form={form}
                    setForm={setForm}
                />
                <Toolbar className="flex-col gap-3 flex">
                    {error?.notification && <div className="text-red-500">{error?.notification}</div>}
                    <TextField
                        onChange={(e) =>
                            setForm({
                                ...form,
                                [e.target.name]: e.target.value,
                            })
                        }
                        error={error?.purpose ? true : false}
                        helperText={error?.purpose ?? ""}
                        name="purpose"
                        type="text"
                        label="Purpose of Borrowing"
                        variant="outlined"
                        fullWidth
                    />

                    <TextField
                        onChange={desired_amount_function}
                        error={error?.desired_amount ? true : false}
                        helperText={error?.desired_amount ?? ""}
                        name="desired_amount"
                        type="number"
                        label="Desired Amount"
                        variant="outlined"
                        fullWidth
                    />
                </Toolbar>

                <Toolbar className="flex-col">
                    <Typography variant="h6" gutterBottom>
                        Amortization Schedule
                    </Typography>
                    {form.schedule.map((entry, index) => (
                        <Typography key={index}>
                            <div className="flex items-center justify-between w-96">
                                <div>Date: {entry.date}</div>
                                <div>
                                    Payment: {form.bi_amortization.toFixed(2)}
                                </div>
                                {/* <div>Status: {entry.status}</div> */}
                            </div>
                        </Typography>
                    ))}
                </Toolbar>

                <Toolbar className="flex items-end justify-end">
                    <Button
                        disabled={loading}
                        variant="contained"
                        onClick={submit_form}
                    >
                        SUBMIT
                    </Button>
                </Toolbar>
            </Dialog>
        </React.Fragment>
    );
}
