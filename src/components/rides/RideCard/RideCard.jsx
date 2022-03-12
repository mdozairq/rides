import React from 'react'
import './RideCard.css';
const RideCard = ({item, distance}) => {
  return (
    <div>
        <div className='card'>
            <div className='section1'>
                <div className='img'><img src={item.map_url} alt="Map" /></div>
                <div className='info'>
                    <span>Ride Id : {item.id}</span><br></br>
                    <span>Origin Station : {item.origin_station_code}</span><br></br>
                    <span>station_path : [{item.station_path && item.station_path.map((d)=>(<span>{d}, </span>))}]</span><br></br>
                    <span>Date : {item.date}</span><br></br>
                    <span>Distance : {distance}</span><br></br>

                </div>
            </div>

            <div className='section2'>
                <span>{item.city}</span>
                <span>{item.state}</span>
            </div>
        </div>
    </div>
  )
}

export default RideCard
