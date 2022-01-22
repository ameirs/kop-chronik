import onClickOutside from "react-onclickoutside";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { Link } from "react-router-dom";

function DdDistrict() {
    DdDistrict.handleClickOutside = () => setOpen(false);

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    const districtArr = useSelector(
        (state) =>
            state.incidents &&
            state.incidents.map((inc) => inc.district || null)
    );
    const districts = [...new Set(districtArr)];

    // console.log("year", year)
    // console.log("yearArr", yearArr)

    return (
        <SlideDown>
            <div className="dd-container">
                <div
                    tabIndex={0}
                    className="dd-header"
                    role="button"
                    onKeyPress={() => toggle(!open)}
                    onClick={() => toggle(!open)}
                >
                    {!open ? (
                        <div className="dd-header">
                            <p>Berlin</p>
                        </div>
                    ) : (
                        <div className="dd-header">
                            <p>x</p>
                        </div>
                    )}
                </div>
                {open && (
                    <ul className="dd-list">
                        {districts.map((district) => (
                            <li
                                className="dd-list-item"
                                // key={item.id}
                            >
                                <Link
                                    // key={friend.id}
                                    to={`/incidents/${district}`}
                                >
                                    <span>{district}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </SlideDown>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => DdDistrict.handleClickOutside,
};

export default onClickOutside(DdDistrict, clickOutsideConfig);
