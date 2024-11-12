import React from "react";
import TableSection from "./sections/table-section";
import { useEffect } from "react";
import store from "@/app/pages/store/store";
import { get_loan_record_thunk } from "@/app/redux/loan_record/loan-record-thunk";
import AdminLayout from "../layout";
import PaginateSection from "./sections/paginate-section";
import SearchSection from "./sections/search-section";

export default function RemainingLoanRecordsPage() {
    useEffect(() => {
        store.dispatch(get_loan_record_thunk());
    }, []);
    return (
        <AdminLayout>
            <div className="py-4">
                <SearchSection />
            </div>
            <TableSection />
            <PaginateSection />
        </AdminLayout>
    );
}
