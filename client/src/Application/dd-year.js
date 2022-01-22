import onClickOutside from "react-onclickoutside";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { Link } from "react-router-dom";

function DdYear() {
    DdYear.handleClickOutside = () => setOpen(false);

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    const yearArr = useSelector(
        (state) =>
            state.incidents &&
            state.incidents.map(
                (inc) => new Date(inc.date).getFullYear() || null
            )
    );
    const years = [...new Set(yearArr)];

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
                            <p>2000–2021</p>
                        </div>
                    ) : (
                        <div className="dd-header">
                            <p>x</p>
                        </div>
                    )}
                </div>
                {open && (
                    <ul className="dd-list">
                        {years.map((year) => (
                            <li
                                className="dd-list-item"
                                // key={item.id}
                            >
                                <Link
                                    // key={friend.id}
                                    to={`/incidents/${year}`}
                                >
                                    <span>{year}</span>
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
    handleClickOutside: () => DdYear.handleClickOutside,
};

export default onClickOutside(DdYear, clickOutsideConfig);
