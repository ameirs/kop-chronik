import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactStreetview from "react-streetview";

// import OvalTsContainer from "./user-feed";

export default function StaticImg() {
    const googleMapsApiKey = "AIzaSyDeCq5mnB7lE9dnj1PwOYeEvrosngd0sHY";
    const signature = "fd87wK0MDkUrZESaf_nMIwWzli8=";

    const [staticImg, setStaticImg] = useState([]);

    const lat = 52.5366132;
    const lng = 13.4009558;
    const heading = 150;

    useEffect(() => {
        fetch(
            `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${lat},${lng}&heading=${heading}&pitch=4&key=${googleMapsApiKey}`
        ).then((results) => {
            console.log("results -> ", results.url);
            setStaticImg(results.url);
        });
    }, []);

    // useEffect(() => {
    //     fetch("/testimonies.json")
    //         .then((resp) => resp.json())
    //         .then((results) => {
    //             setUsers(results);
    //         });
    // }, []);

    useEffect(() => {
        console.log("staticImg -> ", staticImg);
    }, [staticImg]);

    return (
        <>
            <div>
                <p>hello</p>
            </div>
            {/* <div className="sv">
                <ReactStreetview
                    apiKey={googleMapsApiKey}
                    streetViewPanoramaOptions={streetViewPanoramaOptions}
                />
            </div> */}

            {/* <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
            /> */}
            {/* 
            {users.map((each) => (
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
