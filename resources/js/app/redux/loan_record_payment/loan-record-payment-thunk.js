import {
    delete_loan_record_payments_service,
    get_loan_record_payments_by_id_service,
    get_loan_record_payments_service,
    pay_loan_record_service,
    store_loan_record_payments_service,
    update_loan_record_payments_service,
} from "../../services/loan-record-payments-service";
import { loanRecordPaymentSlice } from "./loan-record-payment-slice";

export function get_loan_record_payments_thunk() {
    return async function (dispatch, getState) {
        const res = await get_loan_record_payments_service();
        dispatch(loanRecordPaymentSlice.actions.setLoanRecords(res.data.response));
        return res;
    };
}

export function get_loan_record_payments_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res = await get_loan_record_payments_by_id_service(id);
        dispatch(loanRecordPaymentSlice.actions.setLoanRecords(res.data.response));
        return res;
    };
}

export function store_loan_record_payments_thunk(data) {
    return async function (dispatch, getState) {
        const res = store_loan_record_payments_service(data);
        return res;
    };
}

export function update_loan_record_payments_thunk(data) {
    return async function (dispatch, getState) {
        const res = update_loan_record_payments_service(data);
        return res;
    };
}

export function delete_loan_record_payments_thunk(id) {
    return async function (dispatch, getState) {
        const res = delete_loan_record_payments_service(id);
        return res;
    };
}

export function pay_loan_record_thunk(data) {
    return async function (dispatch, getState) {
        const res = pay_loan_record_service(data);
        return res;
    };
}



