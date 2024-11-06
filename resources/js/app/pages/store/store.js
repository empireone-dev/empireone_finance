import appSlice from "@/app/redux/app-slice";
import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "../admin/dashboard/redux/dashboard-slice";
import loanRecordSlice from "@/app/redux/loan_record/loan-record-slice";
const store = configureStore({
    reducer: {
        app: appSlice,
        dashboards: dashboardSlice,
        loan_records: loanRecordSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
