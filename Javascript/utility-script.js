// Get index value of a state by state name
function getState(stateLk) {
  var state = new Array();
  state[0] = "alabama";
  state[1] = "alaska";
  state[2] = "arizona";
  state[3] = "arkansas";
  state[4] = "california";
  state[5] = "colorado";
  state[6] = "connecticut";
  state[7] = "delaware";
  state[8] = "florida";
  state[9] = "georgia";
  state[10] = "hawaii";
  state[11] = "idaho";
  state[12] = "illinois";
  state[13] = "indiana";
  state[14] = "iowa";
  state[15] = "kansas";
  state[16] = "kentucky";
  state[17] = "louisiana";
  state[18] = "maine";
  state[19] = "maryland";
  state[20] = "massachusetts";
  state[21] = "michigan";
  state[22] = "minnesota";
  state[23] = "mississippi";
  state[24] = "missouri";
  state[25] = "montana";
  state[26] = "nebraska";
  state[27] = "nevada";
  state[28] = "new Hampshire";
  state[29] = "new Jersey";
  state[30] = "new Mexico";
  state[31] = "new York";
  state[32] = "north Carolina";
  state[33] = "north Dakota";
  state[34] = "ohio";
  state[35] = "oklahoma";
  state[36] = "oregon";
  state[37] = "pennsylvania";
  state[38] = "rhode Island";
  state[39] = "south Carolina";
  state[40] = "south Dakota";
  state[41] = "tennessee";
  state[42] = "texas";
  state[43] = "utah";
  state[44] = "vermont";
  state[45] = "virginia";
  state[46] = "washington";
  state[47] = "west Virginia";
  state[48] = "wisconsin";
  state[49] = "wyoming";
  var n = state[stateLk];
  return n;
}

// Test getState() function
// console.log("state = " + getState(49));

// Get full text version of a state by index value
function lookUpStateIndex(val) {
  var lookup = {
    Alabama: "1",
    Alaska: "2",
    Arizona: "3",
    Arkansas: "4",
    California: "5",
    Colorado: "6",
    Connecticut: "7",
    Delaware: "8",
    Florida: "9",
    Georgia: "10",
    Hawaii: "11",
    Idaho: "12",
    Illinois: "13",
    Indiana: "14",
    Iowa: "15",
    Kansas: "16",
    Kentucky: "17",
    Louisiana: "18",
    Maine: "19",
    Maryland: "20",
    Massachusetts: "21",
    Michigan: "22",
    Minnesota: "23",
    Mississippi: "24",
    Missouri: "25",
    Montana: "26",
    Nebraska: "27",
    Nevada: "28",
    "New Hampshire": "29",
    "New Jersey": "30",
    "New Mexico": "31",
    "New York": "32",
    "North Carolina": "33",
    "North Dakota": "34",
    Ohio: "35",
    Oklahoma: "36",
    Oregon: "37",
    Pennsylvania: "38",
    "Rhode Island": "39",
    "South Carolina": "40",
    "South Dakota": "41",
    Tennessee: "42",
    Texas: "43",
    Utah: "44",
    Vermont: "45",
    Virginia: "46",
    Washington: "47",
    "West Virginia": "48",
    Wisconsin: "49",
    Wyoming: "50",
  };
  return lookup[val];
}

// Test lookUpStateIndex() function
// console.log("look up value = " + lookUpStateIndex("New Hampshire"));
