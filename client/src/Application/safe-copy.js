import { useState, useEffect } from "react";
import ReactStreetview from "react-streetview";
// import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const googleMapsApiKey = "AIzaSyDeCq5mnB7lE9dnj1PwOYeEvrosngd0sHY";

export default function StreetView() {
    const { id } = useParams();
    // const incidents = useSelector((state) => state.incidents || null);
    const [incident, setIncident] = useState([]);
    const [streetViewPanoramaOptions, setStreetViewPanoramaOptions] =
        useState(null);

    useEffect(() => {
        fetch(`/incident/${id}.json`)
            .then((resp) => resp.json())
            .then((results) => {
                // console.log("results -> ", results);
                setIncident(results);
            });
    }, []);

    const lat = 52.5366132;
    const lng = 13.4009558;

    useEffect(() => {
        console.log("incident -> ", incident);
        console.log("typeof -> ", typeof parseFloat(incident.lat));
        console.log("parseFloat(incident.lat)) -> ", parseFloat(incident.lat));

        const streetViewPanoramaOptions = {
            position: {
                lat: parseFloat(incident.lat),
                lng: parseFloat(incident.lng),
            },
            pov: { heading: 50, pitch: 0 },
            zoom: 1,
            addressControl: false,
            showRoadLabels: false,
            zoomControl: false,
        };
        console.log("streetViewPanoramaOptions -> ", streetViewPanoramaOptions);
        setStreetViewPanoramaOptions(streetViewPanoramaOptions);
    }, [incident]);

    // incident.heading;

    return (
        <>
            {streetViewPanoramaOptions ? (
                <div className="sv">
                    <ReactStreetview
                        apiKey={googleMapsApiKey}
                        streetViewPanoramaOptions={streetViewPanoramaOptions}
                    />
                </div>
            ) : null}

            {/* <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
            /> */}

            {/* {users.map((each) => (
                <Link
                    to={`/user/${each.id}`}
                    key={each.id}
                    className="oval-tm-container"
                >
                    <div>
                        <img
                            className="avatar"
                            src={each.img_url}
                            alt={`${each.first} ${each.last}`}
                        />
                    </div>
                </Link>
            ))} */}
        </>
    );
}


