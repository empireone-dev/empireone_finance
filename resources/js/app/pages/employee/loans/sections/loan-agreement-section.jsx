import moment from "moment";
import React from "react";

export default function LoanAgreementSection({data}) {
  console.log('datadata',data)
    return (
        <div className="bg-gray-100 font-sans text-gray-700 min-h-screen py-12">
            <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
                <div className="w-full items-center flex justify-center">
                    <img src="/images/logo.png" width={300} />
                </div>
                <h1 className="text-2xl font-semibold text-center mb-6">
                    Loan Agreement
                </h1>

                <p className="text-xl mb-4">{moment().format('LL')}</p>

                <p className="text-sm mb-4">Dear {data.employee_fname} {data.employee_lname},</p>

                <p className="text-sm mb-4">
                    We are pleased to inform you that your salary loan
                    application with EmpireOne has been successfully reviewed
                    and approved. We appreciate the opportunity to assist you in
                    meeting your financial needs.
                </p>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Loan Details:</h2>
                    <ul className="list-inside list-disc pl-5 mt-2">
                        <li>
                            <strong>Loan Amount:</strong> ₱ {data.desired_amount}
                        </li>
                        <li>
                            <strong>Interest Rate:</strong> 5% per month
                        </li>
                        <li>
                            <strong>Term:</strong> 3 months - deductible upfront
                        </li>
                        <li>
                            <strong>Interest Amount:</strong> ₱ {data.interest}
                        </li>
                        <li>
                            <strong>Net Amount:</strong> ₱ {data.net}
                        </li>
                        <li>
                            <strong>Bi-monthly Amortization:</strong> ₱ {data.bi_amortization.toFixed(2)}
                        </li>
                    </ul>
                </div>

                <p className="text-sm mb-4">
                    Your approved loan amount is based on your basic salary, and
                    payment will be automatically deducted from your pay
                    according to the payroll schedule.
                </p>

                <p className="text-sm mb-4">
                    Please review the loan agreement carefully, as it contains
                    important information regarding the terms and conditions of
                    the loan including the repayment schedule, interest rate,
                    and any applicable fees.
                </p>

                <p className="text-sm mb-4">
                    If you agree with the terms outlined above, please reply to
                    this email with your confirmation along with the signed
                    promissory note attached in this email.
                </p>

                <p className="text-sm mb-4">
                    Once received, we will initiate the disbursement process,
                    and the funds will be deposited to your payroll account
                    according to the disbursement schedule which is 15th or 30th
                    of the month.
                </p>

                <p className="text-sm mt-8 font-semibold">Thank you,</p>
                <p className="text-sm">Loan Account Officer</p>
            </div>
        </div>
    );
}
