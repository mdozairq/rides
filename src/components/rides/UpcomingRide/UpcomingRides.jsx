import React, { useState, useEffect } from 'react'
import RideCard from '../RideCard/RideCard'

const UpcomingRides = ({ UpcomingRides, city, state }) => {
    const [Upcoming, setUpcoming] = useState([])
    useEffect(() => {
        const sortedUpcoming = city || state ? [...UpcomingRides].filter((a) => a.city === city || a.state === state)
            : UpcomingRides

        setUpcoming(sortedUpcoming);
    }, [city, state, UpcomingRides])
    return (
        <div>
            {Upcoming.length === 0 ? "No Upcoming Rides Available!" :
                Upcoming.map((item, index) =>
                (<RideCard key={index} item={item} distance={item.destination_station_code - item.origin_station_code}/>)
            )}
        </div>
    )
}

export default UpcomingRides