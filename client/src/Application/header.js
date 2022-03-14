import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSwitchBtn } from "../redux/switch/slice.js";
import { toggleBurgerBtn } from "../redux/burger/slice.js";

export default function Header() {
        const dispatch = useDispatch();  
           
    return (
        <>
            <div className="logo-container">
                <Link to="/">
                    <img
                        className=""
                        src="../assets/icons/logo.svg"
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="menu-container">
                <img
                    className=""
                    onClick={() => dispatch(toggleSwitchBtn())}
                    src="../assets/icons/switch.svg"
                    alt="switch"
                />
                <img
                    className=""
                    onClick={() => dispatch(toggleBurgerBtn(true))}
                    src="../assets/icons/burger.svg"
                    alt="burger menu"
                />
            </div>
        </>
    );
}
