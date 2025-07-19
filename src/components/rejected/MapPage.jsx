// src/pages/MapPage.jsx
import { useState } from "react"
import GoogleMapPicker from "../components/GoogleMapPicker"

export default function MapDemoPage() {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [address, setAddress] = useState("")

  const handleLocationSelect = (lat, lng, address) => {
    setLat(lat)
    setLng(lng)
    setAddress(address)
  }

  return (
    <div className="p-6 max-w-4xl  mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700"> Pick a Location</h2>
      <GoogleMapPicker onLocationSelect={handleLocationSelect} />

      <div className="mt-4 bg-blue-50 p-4 rounded shadow text-sm">
        <p><strong>Latitude:</strong> {lat || "Not selected"}</p>
        <p><strong>Longitude:</strong> {lng || "Not selected"}</p>
        <p><strong>Address:</strong> {address || "Waiting for selection..."}</p>
      </div>
    </div>
  )
}
