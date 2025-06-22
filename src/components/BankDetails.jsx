
// // // export default function BankDetails({ formData, setFormData }) {
// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target
// // //     setFormData(prev => ({
// // //       ...prev,
// // //       bankDetails: {
// // //         ...prev.bankDetails,
// // //         [name]: value
// // //       }
// // //     }))
// // //   }

// // //   return (
// // //     <div className="space-y-5 bg-white p-6 rounded-xl shadow mt-10">
// // //       <h2 className="text-xl font-bold text-blue-900">Bank Details</h2>

// // //       <input
// // //         type="text"
// // //         name="accountHolderName"
// // //         value={formData.bankDetails?.accountHolderName || ""}
// // //         onChange={handleChange}
// // //         placeholder="Account Holder Name"
// // //         className="w-full border p-2 rounded"
// // //       />
// // //       <input
// // //         type="text"
// // //         name="accountNumber"
// // //         value={formData.bankDetails?.accountNumber || ""}
// // //         onChange={handleChange}
// // //         placeholder="Account Number"
// // //         className="w-full border p-2 rounded"
// // //       />
// // //       <input
// // //         type="text"
// // //         name="ifscCode"
// // //         value={formData.bankDetails?.ifscCode || ""}
// // //         onChange={handleChange}
// // //         placeholder="IFSC Code"
// // //         className="w-full border p-2 rounded"
// // //       />
// // //       <input
// // //         type="text"
// // //         name="upi"
// // //         value={formData.bankDetails?.upi || ""}
// // //         onChange={handleChange}
// // //         placeholder="UPI ID (optional)"
// // //         className="w-full border p-2 rounded"
// // //       />
// // //     </div>
// // //   )
// // // }

// // export default function BankDetails({ formData, setFormData }) {
// //   const handleChange = (e) => {
// //     const { name, value } = e.target
// //     setFormData(prev => ({
// //       ...prev,
// //       bankDetails: {
// //         ...prev.bankDetails,
// //         [name]: value
// //       }
// //     }))
// //   }

// //   return (
// //     <div className="space-y-5 bg-white p-6 rounded-xl shadow mt-10">
// //       <h2 className="text-xl font-bold text-blue-900">Bank Details</h2>

// //       <input
// //         type="text"
// //         name="accountHolderName"
// //         value={formData.bankDetails?.accountHolderName || ""}
// //         onChange={handleChange}
// //         placeholder="Account Holder Name"
// //         className="w-full border p-2 rounded"
// //       />

// //       <input
// //         type="text"
// //         name="accountNumber"
// //         value={formData.bankDetails?.accountNumber || ""}
// //         onChange={handleChange}
// //         placeholder="Account Number"
// //         className="w-full border p-2 rounded"
// //       />

// //       <input
// //         type="text"
// //         name="ifscCode"
// //         value={formData.bankDetails?.ifscCode || ""}
// //         onChange={handleChange}
// //         placeholder="IFSC Code"
// //         className="w-full border p-2 rounded"
// //       />

// //       <input
// //         type="text"
// //         name="upi"
// //         value={formData.bankDetails?.upi || ""}
// //         onChange={handleChange}
// //         placeholder="UPI ID (optional)"
// //         className="w-full border p-2 rounded"
// //       />
// //     </div>
// //   )
// // }

// // src/components/ListYourSpaceForm/BankDetailsForm.jsx
// import React from "react"
// import { Label } from "../../ui/label"
// import { Input } from "../../ui/input"

// const BankDetailsForm = ({ formData, setFormData }) => {
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       bankDetails: {
//         ...formData.bankDetails,
//         [name]: value
//       }
//     })
//   }

//   const handlePANChange = (e) => {
//     const { value } = e.target
//     setFormData({
//       ...formData,
//       panNumber: value
//     })
//   }

//   return (
//     <div className="space-y-4">
//       <div>
//         <Label htmlFor="panNumber">PAN Number</Label>
//         <Input
//           type="text"
//           id="panNumber"
//           name="panNumber"
//           value={formData.panNumber || ""}
//           onChange={handlePANChange}
//           required
//         />
//       </div>
//       <div>
//         <Label htmlFor="accountHolder">Account Holder Name</Label>
//         <Input
//           type="text"
//           id="accountHolder"
//           name="accountHolder"
//           value={formData.bankDetails?.accountHolder || ""}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <Label htmlFor="accountNumber">Account Number</Label>
//         <Input
//           type="text"
//           id="accountNumber"
//           name="accountNumber"
//           value={formData.bankDetails?.accountNumber || ""}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <Label htmlFor="ifscCode">IFSC Code</Label>
//         <Input
//           type="text"
//           id="ifscCode"
//           name="ifscCode"
//           value={formData.bankDetails?.ifscCode || ""}
//           onChange={handleChange}
//           required
//         />
//       </div>
//     </div>
//   )
// }

// export default BankDetailsForm


// src/components/ListYourSpaceForm/BankDetails.jsx
import React from "react"

const BankDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="space-y-4 p-4 border rounded-md shadow-sm">
      <div>
        <p className="text-sm font-medium">PAN Number</p>
        <input
          name="panNumber"
          value={formData.panNumber || ""}
          onChange={handleChange}
          placeholder="Enter PAN number"
          className="w-full border px-2 py-1 rounded"
        />
      </div>
      <div>
        <p className="text-sm font-medium">Account Holder Name</p>
        <input
          name="accountHolder"
          value={formData.accountHolder || ""}
          onChange={handleChange}
          placeholder="Enter account holder name"
          className="w-full border px-2 py-1 rounded"
        />
      </div>
      <div>
        <p className="text-sm font-medium">Account Number</p>
        <input
          name="accountNumber"
          value={formData.accountNumber || ""}
          onChange={handleChange}
          placeholder="Enter account number"
          className="w-full border px-2 py-1 rounded"
        />
      </div>
      <div>
        <p className="text-sm font-medium">IFSC Code</p>
        <input
          name="ifscCode"
          value={formData.ifscCode || ""}
          onChange={handleChange}
          placeholder="Enter IFSC code"
          className="w-full border px-2 py-1 rounded"
        />
      </div>
    </div>
  )
}

export default BankDetails
