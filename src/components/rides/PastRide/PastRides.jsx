import React,{useState, useEffect} from 'react'
import RideCard from '../RideCard/RideCard';

const PastRides = ({PastRides, city, state }) => {
    const [Past, setPast] = useState([]);

    useEffect(() => {
        const sortedPast = city || state ? [...PastRides].filter((a) => a.city === city || a.state === state)
            : PastRides
        setPast(sortedPast);
    }, [city, state, PastRides])

    return (
        <div>
             {Past.length === 0 ? "No Past Rides Available!" :
                 Past.map((item, index) =>
                        (<RideCard key={index} item={item} distance={item.destination_station_code - item.origin_station_code} />)
                
            )}
        </div>
    )
}

export default PastRides