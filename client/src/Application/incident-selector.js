import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function IncidentSelector() {
    const { district } = useParams();
    const switchBtn = useSelector((state) => state.switchBtn || null);
    const incidents = useSelector((state) => state.incidents);

    const incByDistrict = useSelector(
        (state) =>
            state.incidents &&
            state.incidents.filter((inc) => inc.district == district || null)
    );
    // const sv_img = useSelector(
    //     (state) =>
    //         state.incidents &&
    //         state.incidents.filter(
    //             (inc) =>
    //                 inc.sv_img.fields.file.url || null
    //         )
    // );

    return (
        <>
            {incidents && incByDistrict.length == 0
                ? incidents.map((inc) => (
                      <Link to={`/incident/${inc.id}`} key={inc.id}>
                          <div className="incident-container">
                              {switchBtn ? (
                                  <div className="incident-text">
                                      <p>
                                          {inc.first} {inc.last}
                                      </p>
                                      <p>{inc.date}</p>
                                  </div>
                              ) : (
                                  <div className="incident-img">
                                      <img
                                          className="incident-img"
                                          src={inc.sv_img.fields.file.url}
                                          alt={`${inc.first} ${inc.last}`}
                                      />
                                  </div>
                              )}
                          </div>
                      </Link>
                  ))
                : null}

            {incByDistrict && incByDistrict.length > 0
                ? incByDistrict.map((inc) => (
                      <Link to={`/incident/${inc.id}`} key={inc.id}>
                          <div className="incident-container">
                              {switchBtn ? (
                                  <div className="incident-text">
                                      <p>
                                          {inc.first} {inc.last}
                                      </p>
                                      <p>{inc.date}</p>
                                  </div>
                              ) : (
                                  <div className="incident-img">
                                      <img
                                          className="incident-img"
                                          //   src={inc.img_url}
                                          //   src={`http:${sv_img}`}
                                          src={`http:${inc.sv_img.fields.file.url}`}
                                          alt={`${inc.first} ${inc.last}`}
                                      />
                                  </div>
                              )}
                          </div>
                      </Link>
                  ))
                : null}
        </>
    );
}
