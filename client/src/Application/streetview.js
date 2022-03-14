import ReactStreetview from "react-streetview";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const googleMapsApiKey = "AIzaSyDeCq5mnB7lE9dnj1PwOYeEvrosngd0sHY";

export default function StreetView() {
    const { id } = useParams();
    const incident = useSelector(
        (state) =>
            state.incidents &&
            state.incidents.filter((inc) => inc.id == id || null)
    );
    const overlay = useSelector((state) => state.overlay || null);
    const [coord, setCoord] = useState([]);
    // const [render, setRender] = useState(false);

    useEffect(() => {    
        console.log("id:", id);
        console.log("incident:", incident[0].sv_url);
        let split = incident[0].sv_url.split("@").pop();
        let longLatHeading = split.split(",");
        let lat = parseFloat(longLatHeading[0]);
        let long = parseFloat(longLatHeading[1]);
        let heading0 = longLatHeading[4];
        let heading = parseInt(heading0.split("h").shift());
        setCoord([lat, long, heading]);
        console.log("coordinates:", coord);
        
    }, []);

    // useEffect(() => {
    //     setRender(!render)
    // }, [coord]);

    return (
        <>
            {incident && coord ? (
                <div
                    className={`streetview-container ${overlay ? "blur" : ""}`}
                >
                    <ReactStreetview
                        apiKey={googleMapsApiKey}
                        streetViewPanoramaOptions={{
                            position: {
                                lat: coord[0],
                                lng: coord[1],
                            },
                            pov: { heading: coord[2], pitch: 0 },
                            zoom: 1,
                            addressControl: false,
                            showRoadLabels: false,
                            zoomControl: false,
                        }}
                    />
                </div>
            ) : null}
        </>
    );
}
