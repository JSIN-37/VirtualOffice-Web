import React, {useState} from 'react';
import {
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";

function Map() {

    const [showInfo, setShowInfo] = useState(null);

    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 6.902450469810835, lng: 79.86106706642659 }}
        >
            <Marker
                position={{
                    lat: 6.902450469810835, 
                    lng: 79.86106706642659
                }}
                onClick={() => {
                    setShowInfo("Your Organization Here!")
                }}
            />

            {showInfo && (
                <InfoWindow
                onCloseClick={() => {
                    setShowInfo(null);
                }}
                position={{
                    lat: 6.902450469810835, 
                    lng: 79.86106706642659
                }}
                >
                <div>
                    <h2>{showInfo}</h2>
                </div>
                </InfoWindow>
            )}
        </GoogleMap>
    )
}

export default Map;
