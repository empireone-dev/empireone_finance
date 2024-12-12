import moment from "moment";
import React from "react";

export default function PromissoryNoteSection({ data }) {
    function formatToPeso(amount) {
        return new Intl.NumberFormat("en-PH", {
            style: "currency",
            currency: "PHP",
        }).format(amount);
    }
    return (
        <div className="bg-gray-100 font-sans text-gray-700 min-h-screen py-12">
            <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
                <div className="w-full items-center flex justify-center">
                    <img src="/images/logo.png" width={300} />
                </div>
                <h1 className="text-2xl font-semibold text-center mb-6">
                    Loan Agreement
                </h1>

                {/* KNOW ALL MEN BY THESE PRESENTS Section */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">
                        KNOW ALL MEN BY THESE PRESENTS:
                    </h2>

                    <p className="text-sm mb-4">
                        I,{" "}
                        <u className="text-black font-black">
                            {data?.employee_fname ?? ""}{" "}
                            {data?.employee_mname ?? ""}{" "}
                            {data?.employee_lname ?? ""}
                        </u>
                        , of legal age, Filipino, married, and resident of{" "}
                        <u className="text-black font-black">
                            {data?.applicant?.caddress}
                        </u>
                        , who has worked with{" "}
                        <u className="text-black font-black">
                            EmpireOne BPO Solutions Inc
                        </u>
                        , a corporation organized and existing under the laws of
                        the Philippines (hereafter the “Corporation”), with
                        principal office located at{" "}
                        <u className="text-black font-black">
                            {data?.applicant?.site} City
                        </u>
                        , has borrowed the amount of{" "}
                        <u className="text-black font-black">{formatToPeso(data?.net)}</u>{" "}
                        from the aforementioned Corporation and is hereby liable
                        with the said amount <br /> of{" "}
                        <u className="text-black font-black">
                            {formatToPeso(data?.desired_amount)}
                        </u>{" "}
                        (gross) which includes interest of 5% per month for 3
                        months payable in 3 months, which I hereby promise and
                        agree that payment shall be automatically deducted from
                        my payroll in bi-monthly installments.
                    </p>

                    {/* Amortization Schedule Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 text-left">
                                        Installment Number
                                    </th>
                                    <th className="px-4 py-2 text-left">
                                        Due Date
                                    </th>
                                    <th className="px-4 py-2 text-left">
                                        Amount Due
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.schedule.map((entry, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="border px-4 py-2">
                                                {moment().format("MMDDYYYYHH") +
                                                    index}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {" "}
                                                {entry.date}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {data.bi_amortization.toFixed(
                                                    2,
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <p className="text-sm mt-4">
                        The aforementioned installment payments shall be
                        effected via salary deduction from the salary or payroll
                        of the promissory from the Corporation.
                    </p>

                    <p className="text-sm mt-4">
                        Failure on the part of the promissor to fully pay said
                        amount upon resignation or termination of employment
                        shall render the entire amount due and demandable at the
                        time of end of employment, and the Corporation is
                        authorized to deduct the amounts payable from the
                        promissor’s last pay.
                    </p>

                    <p className="text-sm mt-4 ">
                        Should there be any remaining payables despite the
                        application of the promissor’s last pay, the promissor
                        shall make the necessary arrangement with the
                        Corporation to ensure payment thereof.
                    </p>

                    <p className="text-sm mt-6">
                        In witness whereof, I have hereunto signed and executed
                        this promissory note this ___th day of ___________{" "}
                        {moment().format("Y")}
                        &nbsp;in ________ City, Philippines.
                    </p>

                    <div className="mt-8 flex justify-start items-start flex-col">
                        <div className="text-left ">
                            <div className="relative h-32">
                                <div className="absolute ">
                                    {data.signature && (
                                        <img
                                            src={data.signature}
                                            alt="Signature"
                                            className=" w-52 h-auto" // Adjust size if needed
                                        />
                                    )}
                                    <p className="-mt-10 font-semibold">
                                        ________________________
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm mt-1">PROMISSOR</p>
                        </div>
                        <div className="text-left">
                            <p className="text-sm">
                                Subscribed and sworn to before me this _____ day
                                of ______ {moment().format("Y")} affiant showing
                                to me his TIN ID no. ____________, issued on
                                ______________, at _____________________.
                            </p>
                            <p className="text-sm mt-4 flex flex-col gap-2">
                                <div>Doc. No. _________;</div>
                                <div>Page No. _________;</div>
                                <div>Book No. _________;</div>
                                Series of {moment().format("Y")}.
                            </p>
                        </div>
                    </div>
                </section>

                <p className="text-sm mt-8 font-semibold">Thank you,</p>
                <p className="text-sm">Loan Account Officer</p>
            </div>
        </div>
    );
}
