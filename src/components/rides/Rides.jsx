import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import RideCard from './RideCard/RideCard';
import filterImg from '../../assets/Group 1537.svg'
import FilterDialog from './FilterDialog';
import UpcomingRides from './UpcomingRide/UpcomingRides';
import PastRides from './PastRide/PastRides'
import NearestRides from './NearestRides/NearestRides';

const Rides = ({ rides, user }) => {

    const [value, setValue] = React.useState('1');
    const [open, setOpen] = React.useState(false);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [upcomingRide, setUpcomingRide] = useState([])
    const [pastRide, setPastRide] = useState([]);
    const [nearestRide, setNearestRide] = useState([]);

    const handleClose = () => {
        setOpen(false);
        // setSelectedValue(value);
    };

    const today = new Date()
    // console.log(today)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const findNearest = (ride) => {
        const temp = []
        ride.map((i) =>
            i.station_path.map((a) => {
                if (a - user.station_code >= 0 && a - user.station_code <= 3) {
                    temp.push({ ...i, distance: a - user.station_code })
                }
            }

            )
        )

        return temp;
    }

    useEffect(() => {

        const NearestRides = findNearest(rides).sort((a, b) => a.distance > b.distance ? 1 : -1);


        const UpcomingRides = rides.filter(a => {
            var date = new Date(a.date);
            return date > today
        });

        const PastRides = rides.filter(a => {
            var date = new Date(a.date);
            return date < today
        }
        );
        setUpcomingRide(UpcomingRides)
        setPastRide(PastRides)
        setNearestRide(NearestRides)
        console.log("NR: ", NearestRides);
    }, [rides])












    return (
        <>
            {
                open && <FilterDialog open={open}
                    onClose={handleClose}
                    data={rides}
                    city={city}
                    setCity={setCity}
                    state={state}
                    setState={setState}
                    setOpen={setOpen}
                />
            }
            <TabContext
                value={value}
            >
                <Box>
                    <TabList onChange={handleChange} aria-label="lab API tabs example"
                        TabIndicatorProps={{
                            sx: {
                                backgroundColor: 'white',
                            },
                        }}
                    >
                        <Tab label={`Nearest Rides  (${nearestRide.length})`} value="1"
                            style={{
                                color: value === '1' ? "#fff" : "#D0CBCB"
                            }}
                        />
                        <Tab label={`Upcoming Rides  (${upcomingRide.length})`} value="2"
                            style={{
                                color: value === '2' ? "#fff" : "#D0CBCB"
                            }}
                        />
                        <Tab label={`Past Rides (${pastRide.length})`} value="3"
                            style={{
                                color: value === '3' ? "#fff" : "#D0CBCB"
                            }}

                        />
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", cursor: "pointer", width: "100%" }} >
                            <img src={filterImg} alt="button" style={{ float: "right", marginRight: "30px" }} onClick={() => setOpen(true)} />
                        </div>

                    </TabList>

                </Box>
                <TabPanel value="1">
                    <NearestRides rides={nearestRide} city={city} state={state} />
                </TabPanel>
                <TabPanel value="2">
                    <UpcomingRides UpcomingRides={upcomingRide} city={city} state={state} />

                </TabPanel>
                <TabPanel value="3">
                    <PastRides PastRides={pastRide} city={city} state={state} />
                </TabPanel>
            </TabContext>

        </>
    )
}

export default Rides;
