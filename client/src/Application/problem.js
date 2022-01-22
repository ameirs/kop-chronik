import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactStreetview from "react-streetview";

// import OvalTsContainer from "./user-feed";

export default function App() {
    const [incidents, setIncidents] = useState([]);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        fetch("/incidents.json")
            .then((resp) => resp.json())
            .then((results) => {
                console.log("results -> ", results);
                setIncidents(results);
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
        console.log("incidents -> ", incidents);
        console.log("hover -> ", hover);
    }, [incidents]);

    return (
        <div className="main-container">
            <div
                className="incident-container"
                onMouseEnter={setHover(true)}
                onmouseleave={setHover(false)}
            >
                {incidents.map((inc) => (
                    <>
                        {!hover ? (
                            <img
                                className="incident-img"
                                src={inc.img_url}
                                alt={`${inc.first} ${inc.last}`}
                            />
                        ) : (
                            <div className="incident-text">
                                <p>
                                    {inc.first} {inc.last}
                                </p>
                                <p>{inc.date}</p>
                            </div>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
}
