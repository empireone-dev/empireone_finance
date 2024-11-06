import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const loanRecordSlice = createSlice({
  name: 'loan_records',
  initialState: {
    loan_records: {
      data:[]
    },
    loan_record: {},
  },
  reducers: {
    setLoanRecords: (state, action) => {
      state.loan_records.data = action.payload
    },
    setLoanRecord: (state, action) => {
      state.loan_record = action.payload
    },
  },
})
export const { 
  setLoanRecords,
  setLoanRecord
 } = loanRecordSlice.actions

export default loanRecordSlice.reducer
