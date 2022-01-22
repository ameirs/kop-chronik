export default function switchBtnReducer(switchBtn = false, action) {
    if (action.type == "switchBtn/toggleSwitchBtn") {
        switchBtn = !switchBtn;
    }
    return switchBtn;
}
// –––– action creator ––––

export function toggleSwitchBtn() {
    return {
        type: "switchBtn/toggleSwitchBtn",
    };
}
