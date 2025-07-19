// src/components/ListYourSpaceForm/ListingType.jsx
import React from "react"

const ListingType = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, listingType: e.target.value })
  }

  return (
    <div className="grid gap-6">
      <p className="text-lg font-semibold text-gray-700">Choose Your Listing Type</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className={`border rounded-lg p-4 cursor-pointer transition hover:shadow-md ${formData.listingType === "Basic" ? "ring-2 ring-blue-500" : ""}`}>
          <input
            type="radio"
            name="listingType"
            value="Basic"
            checked={formData.listingType === "Basic"}
            onChange={handleChange}
            className="hidden"
          />
          <div>
            <h3 className="text-xl font-bold text-blue-700">Basic</h3>
            <p className="text-sm text-gray-600 mt-1">Free listing with manual approval</p>
            <p className="text-sm font-medium text-green-600 mt-2">₹0</p>
          </div>
        </label>

        <label className={`border rounded-lg p-4 cursor-pointer transition hover:shadow-md ${formData.listingType === "Premium" ? "ring-2 ring-purple-500" : ""}`}>
          <input
            type="radio"
            name="listingType"
            value="Premium"
            checked={formData.listingType === "Premium"}
            onChange={handleChange}
            className="hidden"
          />
          <div>
            <h3 className="text-xl font-bold text-purple-700">Premium</h3>
            <p className="text-sm text-gray-600 mt-1">Get priority placement & faster approval</p>
            <p className="text-sm font-medium text-purple-600 mt-2">₹999</p>
          </div>
        </label>
      </div>
    </div>
  )
}

export default ListingType
