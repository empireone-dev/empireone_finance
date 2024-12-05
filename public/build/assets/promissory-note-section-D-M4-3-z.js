import{j as e}from"./app-lbZC4vOA.js";import{h as t}from"./moment-C5S46NFB.js";function c({data:s}){var l,r;function n(i){return new Intl.NumberFormat("en-PH",{style:"currency",currency:"PHP"}).format(i)}return e.jsx("div",{className:"bg-gray-100 font-sans text-gray-700 min-h-screen py-12",children:e.jsxs("div",{className:"max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg",children:[e.jsx("div",{className:"w-full items-center flex justify-center",children:e.jsx("img",{src:"/images/logo.png",width:300})}),e.jsx("h1",{className:"text-2xl font-semibold text-center mb-6",children:"Loan Agreement"}),e.jsxs("p",{className:"text-xl mb-4",children:["November 11, ",t().format("Y")]}),e.jsxs("p",{className:"text-sm mb-4",children:["Dear ",s.employee_fname," ",s.employee_lname,","]}),e.jsx("p",{className:"text-sm mb-4",children:"We are pleased to inform you that your salary loan application with EmpireOne has been successfully reviewed and approved. We appreciate the opportunity to assist you in meeting your financial needs."}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Loan Details:"}),e.jsxs("ul",{className:"list-inside list-disc pl-5 mt-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Loan Amount:"})," ₱"," ",s.desired_amount]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Interest Rate:"})," 5% per month"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Term:"})," 3 months - deductible upfront"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Interest Amount:"})," ₱ ",s.interest]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Net Amount:"})," ₱ ",s.net]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bi-monthly Amortization:"})," ₱"," ",s.bi_amortization.toFixed(2)]})]})]}),e.jsx("p",{className:"text-sm mb-4",children:"Your approved loan amount is based on your basic salary, and payment will be automatically deducted from your pay according to the payroll schedule."}),e.jsx("p",{className:"text-sm mb-4",children:"Please review the loan agreement carefully, as it contains important information regarding the terms and conditions of the loan including the repayment schedule, interest rate, and any applicable fees."}),e.jsx("p",{className:"text-sm mb-4",children:"If you agree with the terms outlined above, please reply to this email with your confirmation along with the signed promissory note attached in this email."}),e.jsx("p",{className:"text-sm mb-4",children:"Once received, we will initiate the disbursement process, and the funds will be deposited to your payroll account according to the disbursement schedule which is 15th or 30th of the month."}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"KNOW ALL MEN BY THESE PRESENTS:"}),e.jsxs("p",{className:"text-sm mb-4",children:["I,"," ",e.jsxs("u",{className:"text-black",children:[(s==null?void 0:s.employee_fname)??""," ",(s==null?void 0:s.employee_mname)??""," ",(s==null?void 0:s.employee_lname)??""]}),", of legal age, Filipino, married, and resident of"," ",e.jsx("u",{className:"text-black",children:(l=s==null?void 0:s.applicant)==null?void 0:l.caddress}),", who has worked with"," ",e.jsx("u",{className:"text-black",children:"EmpireOne BPO Solutions Inc"}),", a corporation organized and existing under the laws of the Philippines (hereafter the “Corporation”), with principal office located at"," ",e.jsxs("u",{className:"text-black",children:[(r=s==null?void 0:s.applicant)==null?void 0:r.site," City"]}),", has borrowed the amount of"," ",e.jsx("u",{className:"text-black",children:n(s==null?void 0:s.net)})," ","from the aforementioned Corporation and is hereby liable with the said amount ",e.jsx("br",{})," of"," ",e.jsx("u",{className:"text-black",children:n(s==null?void 0:s.desired_amount)})," ","(gross) which includes interest of 5% per month for 3 months payable in 3 months, which I hereby promise and agree that payment shall be automatically deducted from my payroll in bi-monthly installments."]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-200",children:[e.jsx("th",{className:"px-4 py-2 text-left",children:"Installment Number"}),e.jsx("th",{className:"px-4 py-2 text-left",children:"Due Date"}),e.jsx("th",{className:"px-4 py-2 text-left",children:"Amount Due"})]})}),e.jsx("tbody",{children:s.schedule.map((i,o)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border px-4 py-2",children:t().format("MMDDYYYYHH")+o}),e.jsxs("td",{className:"border px-4 py-2",children:[" ",i.date]}),e.jsx("td",{className:"border px-4 py-2",children:s.bi_amortization.toFixed(2)})]},o))})]})}),e.jsx("p",{className:"text-sm mt-4",children:"The aforementioned installment payments shall be effected via salary deduction from the salary or payroll of the promissory from the Corporation."}),e.jsx("p",{className:"text-sm mt-4",children:"Failure on the part of the promissor to fully pay said amount upon resignation or termination of employment shall render the entire amount due and demandable at the time of end of employment, and the Corporation is authorized to deduct the amounts payable from the promissor’s last pay."}),e.jsx("p",{className:"text-sm mt-4 ",children:"Should there be any remaining payables despite the application of the promissor’s last pay, the promissor shall make the necessary arrangement with the Corporation to ensure payment thereof."}),e.jsxs("p",{className:"text-sm mt-6",children:["In witness whereof, I have hereunto signed and executed this promissory note this ___th day of ___________"," ",t().format("Y")," in ________ City, Philippines."]}),e.jsxs("div",{className:"mt-8 flex justify-start items-start flex-col",children:[e.jsxs("div",{className:"text-left ",children:[e.jsx("div",{className:"relative h-32",children:e.jsxs("div",{className:"absolute ",children:[s.signature&&e.jsx("img",{src:s.signature,alt:"Signature",className:" w-52 h-auto"}),e.jsx("p",{className:"-mt-10 font-semibold",children:"________________________"})]})}),e.jsx("p",{className:"text-sm mt-1",children:"PROMISSOR"})]}),e.jsxs("div",{className:"text-left",children:[e.jsxs("p",{className:"text-sm",children:["Subscribed and sworn to before me this _____ day of ______ ",t().format("Y")," affiant showing to me his TIN ID no. ____________, issued on ______________, at _____________________."]}),e.jsxs("p",{className:"text-sm mt-4 flex flex-col gap-2",children:[e.jsx("div",{children:"Doc. No. _________;"}),e.jsx("div",{children:"Page No. _________;"}),e.jsx("div",{children:"Book No. _________;"}),"Series of ",t().format("Y"),"."]})]})]})]}),e.jsx("p",{className:"text-sm mt-8 font-semibold",children:"Thank you,"}),e.jsx("p",{className:"text-sm",children:"Loan Account Officer"})]})})}export{c as default};