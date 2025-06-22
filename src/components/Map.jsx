// src/components/Map.jsx
export default function Map({ lat, lng, height = "250px" }) {
    return (
      <iframe
        title="Space Location"
        width="100%"
        height={height}
        className="rounded-md border"
        loading="lazy"
        allowFullScreen
        src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
      />
    )
  }
  