import { useDispatch, useSelector } from "react-redux";
import { hideOverlay } from "../redux/overlay/slice.js";

export default function OverlayStart() {
     const dispatch = useDispatch(); 
     const burgerBtn = useSelector((state) => state.burgerBtn || null);

    return (
        <>
            <div
                className="overlay-start-container"
                onClick={() => dispatch(hideOverlay(false))}
            >
                <img className="" src="../assets/icons/logo.svg" alt="logo" />
                <div className="overlay-text">
                    <p>
                        Text und Audio enthalten Beschreibungen rassistischer
                        Gewalt durch die Polizei.
                    </p>
                </div>
            </div>
        </>
    );
}
