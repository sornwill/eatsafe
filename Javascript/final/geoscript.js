

function geoLookUp(){

    var city = $("#searchInput").val();

var settings = {
  async: true,
  crossDomain: true,
  url:
    "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=" + city,
  method: "GET",
  headers: {
    "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
    "x-rapidapi-key": "4f9b629588mshaf3f53eee01ba60p166742jsn4b237a2eb674",
  },
};

$.ajax(settings).done(function (response) {
    console.log(response);
  lat = response.Results[0].lat;
  lon = response.Results[0].lon;

  getResID(lat,lon);
});
};