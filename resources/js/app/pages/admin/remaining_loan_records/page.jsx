import React from 'react'
import TableSection from './sections/table-section'
import { useEffect } from 'react'
import store from '@/app/pages/store/store'
import { get_loan_record_thunk } from '@/app/redux/loan_record/loan-record-thunk'
import AdminLayout from '../layout'

export default function RemainingLoanRecordsPage() {
  useEffect(()=>{
    store.dispatch(get_loan_record_thunk())
  },[])
  return (
    <AdminLayout>
      <TableSection />
    </AdminLayout>
  )
}
