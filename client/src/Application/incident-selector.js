import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";



export default function IncidentSelector() {
    const { district } = useParams();
    const switchBtn = useSelector((state) => state.switchBtn || null);
    const incidents = useSelector((state) => state.incidents || null);
    console.log("incidents", incidents)
    const incByDistrict = useSelector(
        (state) =>
            state.incidents &&
            state.incidents.filter((inc) => inc.district == district || null)
    );

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
                                          src={inc.img_url}
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
                                          src={inc.img_url}
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
