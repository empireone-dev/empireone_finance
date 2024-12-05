import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import RequestCalculationSection from "./request-calculation-section";
import store from "@/app/pages/store/store";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import {
    get_loan_record_by_id_thunk,
    get_loan_record_thunk,
    store_loan_record_thunk,
} from "@/app/redux/loan_record/loan-record-thunk";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import LoanAgreementSection from "./loan-agreement-section";
import PromissoryNoteSection from "./promissory-note-section";
import { setNotification } from "@/app/redux/app-slice";
import SignatureSection from "./signature-section";

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
        signature:''
    });
    const [activeStep, setActiveStep] = React.useState(0);
    const [amortizationSchedule, setAmortizationSchedule] = useState([]);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((store) => store.app);
    const dispatch = useDispatch();
    const salary = parseFloat(user?.salary?.budgetCost) * 0.8;
    const [agrees, setAgrees] = useState({
        value1: false,
        value2: false,
    });
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
            balance: form.desired_amount,
        });
    }, [form?.desired_amount ?? ""]);

    console.log("formssssss", form);

    const handleClickOpen = () => {
        setActiveStep(0);
        setOpen(true);
        setAgrees({
            value1: false,
            value2: false,
        });
    };
    const handleClose = () => {
        setOpen(false);
        setActiveStep(0);
        setAgrees({
            value1: false,
            value2: false,
        });
    };

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
            console.log("result.status ", result.status);
            if (result.status == 200) {
                await store.dispatch(
                    get_loan_record_by_id_thunk(user.employee_id),
                );

                dispatch(
                    setNotification({
                        open: true,
                        type: "success",
                        message: "Will be reviewed",
                    }),
                );
                setLoading(false);
                setOpen(false);
                setActiveStep(0);
                setError({});
            } else {
                setAgrees({
                    value1: false,
                    value2: false,
                });
                setForm({
                    term: 3,
                    desired_amount: 0,
                    interest: 0,
                    net: 0,
                    bi_amortization: 0,
                    interest_rate: 0.05,
                    schedule: [],
                });
                if (result?.response?.data?.errors) {
                    setError(result.response.data.errors);
                    setLoading(false);
                } else {
                    console.log("result", result);
                    setLoading(false);
                    setError({
                        notification: result.data.response,
                    });
                    dispatch(
                        setNotification({
                            open: true,
                            type: "error",
                            message: result.data.response,
                        }),
                    );

                    setTimeout(() => {
                        setError({});
                    }, 2000);
                }
                setOpen(false);
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
        }
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleNextSignature = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const steps = [
        {
            label: "Loan Information",
            component: (
                <>
                    <RequestCalculationSection
                        handleClose={handleClose}
                        user={user}
                        form={form}
                        setForm={setForm}
                    />
                    <Toolbar className="flex-col gap-3 flex">
                        {error?.notification && (
                            <div className="text-red-500">
                                {error?.notification}
                            </div>
                        )}

                        <FormControl
                            fullWidth
                            // error={!!error?.purpose ?? ""}
                        >
                            <InputLabel id="demo-simple-select-label">
                                Purpose of Borrowing
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="purpose"
                                label="Purpose of Borrowing"
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                value={form.purpose ?? ""}
                            >
                                <MenuItem selected disabled></MenuItem>
                                <MenuItem value="Medical Bills">
                                    Medical Bills
                                </MenuItem>
                                <MenuItem value="Vehicle Financing">
                                    Vehicle Financing
                                </MenuItem>
                                <MenuItem value="Home Improvements and Repair">
                                    Home Improvements and Repair
                                </MenuItem>
                                <MenuItem value="Parties & Events">
                                    Parties & Events
                                </MenuItem>
                                <MenuItem value="Vacation Fund">
                                    Vacation Fund
                                </MenuItem>
                                <MenuItem value="Personal Equipments (Gadgets etc.)">
                                    Personal Equipments (Gadgets etc.)
                                </MenuItem>
                                <MenuItem value="Family Support">
                                    Family Support
                                </MenuItem>
                            </Select>
                            {error?.purpose && (
                                <FormHelperText>{error.purpose}</FormHelperText>
                            )}
                        </FormControl>
                        <TextField
                            onChange={(e) => desired_amount_function(e)}
                            error={error?.desired_amount ? true : false}
                            value={form?.desired_amount ?? ""}
                            helperText={error?.desired_amount ?? ""}
                            name="desired_amount"
                            type="number"
                            label="Desired Amount"
                            variant="outlined"
                            fullWidth
                        />
                    </Toolbar>

                    {/* <Toolbar className="flex-col">
                        <Typography variant="h6" gutterBottom>
                            Amortization Schedule
                        </Typography>
                        {form.schedule.map((entry, index) => (
                            <Typography key={index}>
                                <div className="flex items-center justify-between w-96">
                                    <div>Date: {entry.date}</div>
                                    <div>
                                        Payment:{" "}
                                        {form.bi_amortization.toFixed(2)}
                                    </div>
                                </div>
                            </Typography>
                        ))}
                    </Toolbar> */}
                </>
            ),
        },
        {
            label: "Loan Agreement Template",
            component: <LoanAgreementSection data={form} />,
        },
        {
            label: "Signature",
            component: <SignatureSection 
            onNext={handleNextSignature}
            setForm={setForm}
            data={form} />,
        },
        {
            label: "Promissory Note",
            component: <PromissoryNoteSection data={form} />,
        },
    ];
console.log('formform',form)
    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create Loan Request
            </Button>
            <Dialog maxWidth open={open} onClose={handleClose}>
                <Box sx={{ width: 1000 }} className="m-10">
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === steps.length - 1 ? (
                                            <Typography variant="caption">
                                                Last step
                                            </Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.component}</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        {index === steps.length - 1 ? (
                                            <div className="flex flex-col">
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            name="isPayAll"
                                                            onChange={(e) =>
                                                                setAgrees({
                                                                    ...agrees,
                                                                    value2: e
                                                                        .target
                                                                        .checked,
                                                                })
                                                            }
                                                        />
                                                    }
                                                    label="I Agree"
                                                />
                                                <Button
                                                    disabled={
                                                        loading ||
                                                        !agrees.value2
                                                    }
                                                    variant="contained"
                                                    onClick={submit_form}
                                                    sx={{ mt: 1, mr: 1 }}
                                                >
                                                    SUBMIT
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col">
                                                {index == 0 && (
                                                    <Button
                                                        disabled={
                                                            form.purpose ==
                                                                undefined ||
                                                            form.desired_amount ==
                                                                undefined ||
                                                            form.desired_amount ==
                                                                "" ||
                                                            form.desired_amount >
                                                                (salary ?? 9600)
                                                        }
                                                        variant="contained"
                                                        onClick={handleNext}
                                                        sx={{ mt: 1, mr: 1 }}
                                                    >
                                                        Continue
                                                    </Button>
                                                )}
                                                {index == 1 && (
                                                    <>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="isPayAll"
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        setAgrees(
                                                                            {
                                                                                ...agrees,
                                                                                value1: e
                                                                                    .target
                                                                                    .checked,
                                                                            },
                                                                        )
                                                                    }
                                                                />
                                                            }
                                                            label="I Agree"
                                                        />

                                                        <Button
                                                            disabled={
                                                                !agrees.value1
                                                            }
                                                            variant="contained"
                                                            onClick={handleNext}
                                                            sx={{
                                                                mt: 1,
                                                                mr: 1,
                                                            }}
                                                        >
                                                            Continue
                                                        </Button>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                        <div className="flex flex-col mt-3">
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Box>
            </Dialog>
        </React.Fragment>
    );
}
