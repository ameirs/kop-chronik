import ReactStreetview from "react-streetview";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const googleMapsApiKey = "AIzaSyDeCq5mnB7lE9dnj1PwOYeEvrosngd0sHY";

export default function StreetView() {
    const { id } = useParams();

    const incident = useSelector(
        (state) =>
            state.incidents &&
            state.incidents.filter((inc) => inc.id == id || null)
    );
    
    const overlay = useSelector((state) => state.overlay || null);

    return (
        <>
            {incident ? (
                <div
                    className={`streetview-container ${overlay ? "blur" : ""}`}
                >
                    <ReactStreetview
                        apiKey={googleMapsApiKey}
                        streetViewPanoramaOptions={{
                            position: {
                                lat: parseFloat(incident[0].lat),
                                lng: parseFloat(incident[0].lng),
                            },
                            pov: { heading: incident[0].heading, pitch: 0 },
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
