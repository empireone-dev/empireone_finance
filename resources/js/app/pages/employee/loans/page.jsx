import React from "react";
import EmployeeLayout from "../layout";
import RequestSection from "./sections/request-section";
import TableSection from "./sections/table-section";
import { useEffect } from "react";
import store from "../../store/store";
import { get_loan_record_by_id_thunk } from "@/app/redux/loan_record/loan-record-thunk";
import { useSelector } from "react-redux";

export default function RequestPage() {
    const { user } = useSelector((store) => store.app);
    useEffect(() => {
      if (user.employee_id) {
        store.dispatch(get_loan_record_by_id_thunk(user.employee_id));
      }
    }, [user.employee_id]);

    return (
        <EmployeeLayout>
            <div className="flex gap-3 flex-col">
                <div className="w-96">
                    <RequestSection />
                </div>
                <TableSection />
            </div>
        </EmployeeLayout>
    );
}
