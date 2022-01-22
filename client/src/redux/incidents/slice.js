
export default function incidentsReducer(incidents = null, action) {
    if (action.type == "incidents/receiveIncidents") {
        incidents = action.payload.incidents;
    }
    return incidents;
}
// –––– action creator ––––

export function receiveIncidents(incidents) {
    console.log("receiveIncidents is called -> ", incidents);
    return {
        type: "incidents/receiveIncidents",
        payload: { incidents },
    };
}
