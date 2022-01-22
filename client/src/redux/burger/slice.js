export default function burgerBtnReducer(burgerBtn = false, action) {
    if (action.type == "burgerBtn/toggleBurgerBtn") {
        burgerBtn = action.payload.burgerBtn;
    }
    return burgerBtn;
}
// –––– action creator ––––

export function toggleBurgerBtn(burgerBtn) {
    console.log("burger button is called")
    return {
        type: "burgerBtn/toggleBurgerBtn",
        payload: { burgerBtn },
    };
}
