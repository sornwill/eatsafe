// Recipe - Food - Nutrition API
// https://rapidapi.com/spoonacular/api/recipe-food-nutrition

var queryURL = buildRFNQuery("how much vitamin c is in an apple");

// console.log("RFN Query String = " + queryURL);

function buildRFNQuery(rfnQueryString) {
  var str = rfnQueryString;
  var res = str.split(" ");
  var combine = "";

  var text = "";
  for (i = 0; i < 20; i++) {
    if (res[i] != null) {
      text += res[i];
      // console.log("loope value= " + text);
      if (res[i + 1] != null) {
        text += "%20";
      }
    }
  }

  text += "%253F";
  var rfnQueryURL =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=";
  rfnQueryURL += text;

  return rfnQueryURL;
}

var settings = {
  async: true,
  crossDomain: true,
  url: queryURL,
  method: "GET",
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "4f9b629588mshaf3f53eee01ba60p166742jsn4b237a2eb674",
  },
};

$.ajax(settings).done(function (response) {
  // console.log(response);
  var answer = response.answer;
  var imgLink = response.image;
  console.log(answer);
  console.log(imgLink);
});
