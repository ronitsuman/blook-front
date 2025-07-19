import { useEffect, useRef } from "react"
 
export default function GoogleMapPicker({ onLocationSelect }) {
  const mapRef = useRef(null)
  const markerRef = useRef(null)
  const hasInitializedRef = useRef(false) // ✅ Prevent repeat geolocation

  useEffect(() => {
    window.initMap = () => {
      if (hasInitializedRef.current) return
      hasInitializedRef.current = true

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords
          initializeMap({ lat: latitude, lng: longitude })
        },
        () => {
          initializeMap({ lat: 28.6139, lng: 77.2090 }) // fallback
        }
      )
    }

    if (!document.querySelector("#google-maps-script")) {
      const script = document.createElement("script")
      script.id = "google-maps-script"
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=marker&callback=initMap&loading=async`
      script.async = true
      script.defer = true
      document.body.appendChild(script)
    } else if (window.google && window.google.maps) {
      window.initMap()
    }
  }, [onLocationSelect])

  const initializeMap = (initialPosition) => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: initialPosition,
      zoom: 14,
      mapId: import.meta.env.VITE_GOOGLE_MAP_ID,
      tilt: 45,
    })

    const geocoder = new window.google.maps.Geocoder()

    let geocodeTimeout = null // ✅ debounce protection

    const updateLocation = (latLng) => {
      clearTimeout(geocodeTimeout)
      geocodeTimeout = setTimeout(() => {
        const lat = typeof latLng.lat === "function" ? latLng.lat() : latLng.lat
        const lng = typeof latLng.lng === "function" ? latLng.lng() : latLng.lng

        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
          if (status === "OK" && results[0]) {
            onLocationSelect(lat, lng, results[0].formatted_address)
          } else {
            onLocationSelect(lat, lng, "Address not found")
          }
        })
      }, 300) // debounce slight delay
    }

    const { AdvancedMarkerElement } = window.google.maps.marker

    const marker = new AdvancedMarkerElement({
      map,
      position: initialPosition,
      title: "Your Location",
    })

    markerRef.current = marker

    map.addListener("click", (e) => {
      const latLng = e.latLng
      marker.position = latLng
      map.panTo(latLng)
      updateLocation(latLng)
    })

    // ✅ Only do 1 geocode initially
    updateLocation(initialPosition)
  }

  return <div ref={mapRef} className="w-full h-64 mt-2 rounded border shadow" />
}
