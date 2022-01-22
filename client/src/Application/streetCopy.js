import ReactStreetview from "react-streetview";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const googleMapsApiKey = "AIzaSyDeCq5mnB7lE9dnj1PwOYeEvrosngd0sHY";

export default function StreetView() {
    const { id } = useParams();

    const incident = useSelector(
        (state) =>
            state.incidents &&
            state.incidents.filter((inc) => inc.id == id || null)
    );

    console.log("incident street view", incident);
    let streetViewPanoramaOptions;

    useEffect(() => {
        if (incident && streetViewPanoramaOptions == undefined) {
            console.log(incident[0].lat);
            streetViewPanoramaOptions = {
                position: {
                    lat: parseFloat(incident[0].lat),
                    lng: parseFloat(incident[0].lng),
                },
                pov: { heading: incident[0].heading, pitch: 0 },
                zoom: 1,
                addressControl: false,
                showRoadLabels: false,
                zoomControl: false,
            };
            console.log("streetViewPanoramaOptions", streetViewPanoramaOptions);
        }
    }, [incident]);

    return (
        <>
            {incident ? (
                <div className="streetview-container">
                    <ReactStreetview
                        apiKey={googleMapsApiKey}
                        streetViewPanoramaOptions={streetViewPanoramaOptions}
                    />
                </div>
            ) : null}
        </>
    );
}
