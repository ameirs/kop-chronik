import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createClient } from "contentful";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import IncidentSelector from "./incident-selector";
import Header from "./header";
import SelectionBar from "./selection-bar";
import OverlayStart from "./overlay-start";
import Burger from "./burger-text";
import { useDispatch } from "react-redux";
import { receiveIncidents } from "../redux/incidents/slice.js";

const DdDistrict = React.lazy(() => import("./dd-district"));
const DdYear = React.lazy(() => import("./dd-year"));
const StreetView = React.lazy(() => import("./streetview"));
const IncidentSelector = React.lazy(() => import("./incident-selector"));
import Loader from "./loader";
// import DdDistrict from "./dd-district";
// import DdYear from "./dd-year";
// import StreetView from "./streetview";

const googleKey = "AIzaSyDeCq5mnB7lE9dnj1PwOYeEvrosngd0sHY";

export default function App() {
    const dispatch = useDispatch();
    const overlay = useSelector((state) => state.overlay || null);
    const switchBtn = useSelector((state) => state.switchBtn || null);
    const burgerBtn = useSelector((state) => state.burgerBtn || null);
    // const [images, setImages] = useState([]);

    useEffect(() => {
        const client = createClient({
            space: "3abj94kliouj",
            accessToken: "o_z_3tJnwlcIqvvKpL-g3BxhNXscmFcKgzM0JuFPqnU",
        });
        client.getEntries({ content_type: "incident" }).then((resp) => {
            let incidents = resp.items.map((inc) => {
                return {
                    ...inc.fields,
                    id: inc.sys.id,
                    // img_url: `${inc.fields.img_url}${googleKey}`,
                    date: new Intl.DateTimeFormat("en-GB", {
                        dateStyle: "long",
                    }).format(new Date(inc.fields.date)),
                };
            });
            function byDate(a, b) {
                return new Date(b.date).valueOf() - new Date(a.date).valueOf();
            }
            incidents = incidents.sort(byDate);

            incidents = incidents.filter(inc => inc.sv_img != undefined)
        
            dispatch(receiveIncidents(incidents));
        });
        // fetch("/images.json")
        //     .then((response) => response.json())
        //     .then((results) => {
        //         setImages(results);
        //     });
    }, []);

    return (
        <BrowserRouter>
            {burgerBtn ? <Burger /> : null}
            {overlay ? <OverlayStart /> : null}
            <div className={`${overlay || burgerBtn ? "blur" : ""}`}>
                <header>
                    <Header />
                </header>
                <Route exact path="/">
                    <nav>
                        <Suspense fallback={<Loader />}>
                            <DdDistrict />
                        </Suspense>
                        <Suspense fallback={<Loader />}>
                            <DdYear />
                        </Suspense>
                    </nav>
                    <div className="main-incident-container">
                        <Suspense fallback={<Loader />}>
                            <IncidentSelector />
                        </Suspense>
                    </div>
                </Route>
            </div>
            <Route path="/incidents/:district">
                <nav>
                    <Suspense fallback={<Loader />}>
                        <DdDistrict />
                    </Suspense>
                    <Suspense fallback={<Loader />}>
                        <DdYear />
                    </Suspense>
                </nav>
                <div className="main-incident-container">
                    <IncidentSelector />
                </div>
            </Route>
            <Route path="/incident/:id">
                <SelectionBar />
                <div className="main-streetview-container">
                    <Suspense fallback={<Loader />}>
                        <StreetView />
                    </Suspense>
                </div>
            </Route>
        </BrowserRouter>
    );
}
