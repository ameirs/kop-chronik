
function getStaticImage(url) {
    let key = "AIzaSyDeCq5mnB7lE9dnj1PwOYeEvrosngd0sHY";
    let split = url.split("@").pop();
    let longLatHeading = split.split(",");
    let long = longLatHeading[0];
    let lat = longLatHeading[1];
    let heading0 = longLatHeading[4];
    let heading = heading0.split("h").shift();
   
    console.log("heading:", heading)
    console.log("long:",long);
    console.log("lat:",lat);
  
    return `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${long},${lat}&heading=${heading}&pitch=-0&key=${key}`;
}

console.log(
    getStaticImage(
        "https://www.google.com/maps/place/Kirchhofstra%C3%9Fe+45,+12055+Berlin/@52.4730339,13.4432416,3a,75y,139.01h,90t/data=!3m7!1e1!3m5!1s-UEZp9L7-3lnmYJIjf_UPA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D-UEZp9L7-3lnmYJIjf_UPA%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D139.00842%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x47a84f9fe5edd199:0x8595136700c46080!8m2!3d52.4729496!4d13.4433418"
    )
);











// function getStaticImage(url) {
//     let key = "AIzaSyDeCq5mnB7lE9dnj1PwOYeEvrosngd0sHY";
//     let split = url.split("@").pop();
//     let longLatHeading = split.split(",");
//     let lat = split.slice(11, 20);
//     // let long = split.slice(0, 9);
//     // let lat = split.slice(11, 20);
//     let heading0 = url.split("y,").pop();
//     let heading = heading0.split("h,").shift();
//     console.log("heading0:", heading0);
//     console.log("heading:", heading);
//     // let random = Math.floor(Math.random() * 360);
//     console.log(long);
//     console.log(lat);
//     return `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${long},${lat}&heading=${heading}&pitch=-0&key=${key}`;
// }
