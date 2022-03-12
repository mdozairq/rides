import React, { useEffect, useState } from 'react'
import RideCard from '../RideCard/RideCard'

const NearestRides = ({ city, state, rides }) => {
  const [sorted, setSorted] = useState([])

  useEffect(() => {
    const sortedData = city || state ? [...rides].filter((a) => a.city === city || a.state === state)
      : rides
    setSorted(sortedData);
  }, [city, state, rides])

  return (
    <div>
      { sorted.length === 0 ? "No Nearest Rides Available!" :
        sorted.map((item, index) =>
        (<RideCard key={index} item={item} distance={item.distance}/>)
      )}
    </div>
  )
}

export default NearestRides