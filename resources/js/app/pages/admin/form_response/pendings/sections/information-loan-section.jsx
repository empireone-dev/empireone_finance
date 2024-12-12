import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useState, useRef } from "react";
import { Visibility } from "@mui/icons-material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AboutLoanSection from "./about-loan-section";
import LoanAgreementSection from "@/app/pages/employee/loans/sections/loan-agreement-section";
import PromissoryNoteSection from "@/app/pages/employee/loans/sections/promissory-note-section";
// import ApprovedButtonSection from "./approve-button-section";
// import DeclinedButtonSection from "./declined-button-section";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
export default function InformationLoanSection({ data }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                <Visibility />
            </Button>
            <Dialog
              maxWidth="lg" 
                fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="p-2.5">
                    <div className="flex w-full items-end justify-end">
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <Box sx={{ width: "100%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                            >
                                <Tab label="Loan Information" {...a11yProps(0)} />
                                <Tab label="Loan Agreement" {...a11yProps(1)} />
                                <Tab label="Promissory Note" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <AboutLoanSection data={data} />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                           <LoanAgreementSection  data={data}/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <PromissoryNoteSection data={data}/>
                        </CustomTabPanel>
                    </Box>
                </div>
                <DialogActions>
                    {/* <DeclinedButtonSection setOpen={setOpen} data={data} />
                    <ApprovedButtonSection setOpen={setOpen} data={data} /> */}
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
