import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SlideDown } from "react-slidedown";
import { jsPDF } from "jspdf";

export default function SelectionBar() {
    const { id } = useParams();
    const incident = useSelector(
        (state) =>
            state.incidents &&
            state.incidents.filter((inc) => inc.id == id || null)
    );
    const overlay = useSelector((state) => state.overlay || null);
    const [toggle, setToggle] = useState(false);

    const createPdf = function createPdf() {
        const doc = new jsPDF();
        let textBody = `${incident[0].first} ${incident[0].last}, ${incident[0].date}            
${incident[0].description}
${incident[0].crim_proc}`;
        var splitText = doc.splitTextToSize(textBody, 180);
        doc.text(splitText, 1, 10);
        doc.save("a4.pdf");
    };

    console.log(incident);

    return (
        <>
            {incident ? (
                <>
                    <div
                        className={`selection-bar-container ${
                            overlay ? "blur" : ""
                        }`}
                    >
                        <div
                            className="incident-title"
                            onClick={() => setToggle(!toggle)}
                        >
                            <p>
                                {incident[0].first} {incident[0].last}
                            </p>
                            <p>{incident[0].date}</p>
                        </div>
                        <div className="control-container">
                            <img
                                className=""
                                onClick={() => setToggle(!toggle)}
                                src="../assets/icons/info.svg"
                                alt="info-logo"
                            />

                            <img
                                className=""
                                src="../assets/icons/play.svg"
                                alt="info-logo"
                            />

                            <img
                                onClick={createPdf}
                                className=""
                                src="../assets/icons/download.svg"
                                alt="info-logo"
                            />
                        </div>
                    </div>
                    {toggle ? (
                        <SlideDown>
                            <div className="text-container">
                                <div>
                                    <br></br>
                                    <p>Vorfall: </p>
                                    <p>{incident[0].description}</p>
                                    <br></br>
                                </div>
                                <div>
                                    <p>Weiterführende Informationen: </p>
                                    <p>{incident[0].further_info}</p>
                                    <br></br>
                                </div>
                                <div>
                                    <p>Strafrechtlicher Verlauf: </p>
                                    <p>{incident[0].crim_proc}</p>
                                    <br></br>
                                </div>
                            </div>
                        </SlideDown>
                    ) : null}
                </>
            ) : null}
        </>
    );
}
