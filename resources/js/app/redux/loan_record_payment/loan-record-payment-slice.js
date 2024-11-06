import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const loanRecordPaymentSlice = createSlice({
  name: 'loan_record_payments',
  initialState: {
    loan_record_payments: {
      data:[]
    },
    loan_record_payment: {},
  },
  reducers: {
    setLoanRecordPayments: (state, action) => {
      state.loan_record_payments.data = action.payload
    },
    setLoanRecordPayment: (state, action) => {
      state.loan_record_payment = action.payload
    },
  },
})
export const { 
  setLoanRecordPayments,
  setLoanRecordPayment
 } = loanRecordPaymentSlice.actions

export default loanRecordPaymentSlice.reducer
