// src/components/ListYourSpaceForm/Availability.jsx
import React from "react"

const Availability = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="space-y-4 p-4 border rounded-md shadow-sm">
      <div>
        <p className="text-sm font-medium">Available From</p>
        <input
          type="date"
          name="availableFrom"
          value={formData.availableFrom || ""}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
        />
      </div>
      <div>
        <p className="text-sm font-medium">Available To</p>
        <input
          type="date"
          name="availableTo"
          value={formData.availableTo || ""}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
        />
      </div>
    </div>
  )
}

export default Availability