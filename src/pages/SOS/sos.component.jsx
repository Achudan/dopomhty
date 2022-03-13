import React, { useState, useEffect } from "react";
import UseCurrentLocation from "../../components/UserCurrentLocation/user-current-location.component";
import UseWatchLocation from "../../components/UserCurrentLocation/use-watch-location.component";
// import Location from "../../components/Location/location.component";
import { geolocationOptions } from "../../constants/geolocationoptions";
import Map from "../../components/Markers/map";
import { locationsData } from '../../components/Markers/datamap'
import CustomButton from "../../components/Custom-Button/custom-button.component";
import { auth } from '../../firebase/firebase.utils';
const SOS = ({currentUser}) => {
    const { location: currentLocation, error: currentError } = UseCurrentLocation(geolocationOptions);
    const { location, cancelLocationWatch, error } = UseWatchLocation(geolocationOptions);
    const [isWatchinForLocation, setIsWatchForLocation] = useState(true);
    const [hotspot, setHotspot] = useState(currentLocation);
    useEffect(() => {
        if (!location) return;
        setTimeout(() => {
            cancelLocationWatch();
            setIsWatchForLocation(false);
        }, 3000);
    }, [location, cancelLocationWatch]);

    const callSOS = loc => {
        if (loc != null) {
            setHotspot(loc)
            console.log(loc)
        }
        else {
            console.log('fetching loc')
        }
    }

    return (
        <div className="appContainer">
            {
                currentUser?
                (<CustomButton type="button" onClick={() => callSOS(location)} style={{'width': '100vw'}}>SOS</CustomButton>):
                (<></>)

                
            }
            {
                hotspot?(<h2 style={{'marginTop':'0px'}}>Your current location is now added in heat map</h2>):(<></>)
            }
            {/* <CustomButton type="button" onClick={() => callSOS(location)}>SOS</CustomButton> */}
            <div className="googlemap">
                {location ? (
                    <Map className='mapping' data={locationsData} center={{ lat: 50.4501, lng: 30.5234 }} currentLat={location.latitude} currentLng={location.longitude} />
                ) : (
                    <p>Loading...</p>
                )}
                {error && <p className="errorMessage">Location Error: {error}</p>}
            </div>
            {/* <header> */}
                
                {/* <button type='button' onClick={() => callSOS(location)}>SOS</button> */}
                {/* {console.log(hotspot)} */}
            {/* </header> */}
            {/* <Map data={locationsData} center={{ lat: 50.4501, lng: 30.5234 }} currentLat={location['latitude']} currentLng={location['longitude']} />; */}
        </div>


    );
};



export default SOS