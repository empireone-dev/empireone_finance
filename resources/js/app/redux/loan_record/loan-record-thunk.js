import {
    delete_loan_record_service,
    get_loan_record_by_id_service,
    get_loan_record_service,
    loan_change_status_service,
    store_loan_record_service,
    update_loan_record_service,
} from "../../services/loan-record-service";
import { loanRecordSlice } from "./loan-record-slice";

export function get_loan_record_thunk() {
    return async function (dispatch, getState) {
        const res = await get_loan_record_service();
        dispatch(loanRecordSlice.actions.setLoanRecords(res.data.response));
        return res;
    };
}

export function get_loan_record_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_loan_record_by_id_service(id);
        dispatch(loanRecordSlice.actions.setLoanRecords(res.data.response));
        return res;
    };
}

export function store_loan_record_thunk(data) {
    return async function (dispatch, getState) {
        const res = store_loan_record_service(data);
        return res;
    };
}

export function update_loan_record_thunk(data) {
    return async function (dispatch, getState) {
        const res = update_loan_record_service(data);
        return res;
    };
}

export function delete_loan_record_thunk(id) {
    return async function (dispatch, getState) {
        const res = delete_loan_record_service(id);
        return res;
    };
}

export function loan_change_status_thunk(data) {
    return async function (dispatch, getState) {
        const res = loan_change_status_service(data);
        return res;
    };
}

