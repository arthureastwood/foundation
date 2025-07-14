import React from 'react'

const Location = () => {
    // Coordinates for Mugona village, Kapyanga subcounty, Bugiri district, Uganda
  // Example: Latitude: 0.6275, Longitude: 33.7481 (approximate, adjust as needed)
  const latitude = 0.6275
  const longitude = 33.7481
  return (
    <div className="w-full flex justify-center py-8 bg-white">
      <div className="w-full max-w-3xl h-[350px] rounded-lg overflow-hidden shadow-lg border">
        <iframe
          title="Bugiri District Map"
          src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="text-center mt-4 text-gray-700">
        <strong>Bugiri District, Kapyanga Subcounty, Mugona Village</strong>
      </div>
    </div>
  )
}

export default Location