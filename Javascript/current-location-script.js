// Function return current latitude longitude of the calling application

// var latitude = 0;
// var longitude = 0;

getCurrentLocation();
// console.log("latitude = " + latitude);
// console.log("longitude " + longitude);

function getCurrentLocation() {
  function onPositionReceived(position) {
    console.log(position);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log("lat = " + latitude);
    console.log("lat = " + longitude);
  }

  function locationNotReceived(postionError) {
    console.log(postionError);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      onPositionReceived,
      locationNotReceived,
      { timeout: 3 }
    );
  }
}
