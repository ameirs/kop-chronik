export default function overlayReducer(overlay = true, action) {
    if (action.type == "overlay/hideOverlay") {
        overlay = action.payload.overlay;
    }
    return overlay;
}
// –––– action creator ––––

export function hideOverlay(overlay) {
    console.log("hideOverlay is called -> ", overlay);
    return {
        type: "overlay/hideOverlay",
        payload: { overlay },
    };
}
