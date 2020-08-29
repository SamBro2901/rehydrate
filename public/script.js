var socket = io();
function populateCrops() {
  var cropList = [
    {
      "text": ["Rice", "Wheat", "Sugarcane", "Tobacco", "Cotton", "Jute", "Vegetables", "Oil Seeds"],
      "value": ["rice", "wheat", "sugarcane", "tobacco", "cotton", "jute", "veggies", "oilseeds"]
    },
    {
      "text": ["Jowar", "Wheat", "Cotton", "Castor", "Sunflower", "Linseed", "Tobacco"],
      "value": ["jowar", "wheat", "cotton", "castor", "sunflower", "linseed", "tobacco"]
    },
    {
      "text": ["Tea", "Coffee", "Rubber", "Cinchona", "Coconut"],
      "value": ["tea", "coffee", "rubber", "cinchona", "coconut"]
    },
    {
      "text": ["Rice", "Tea", "Beans", "Corn", "Vegetables"],
      "value": ["rice", "tea", "beans", "corn", "veggies"]
    },
    {
      "text": ["Barley", "Cotton", "Millets", "Maize"],
      "value": ["barley", "cotton", "millets", "maize"]
    },
    {
      "text": ["Sunflower", "Sugarbeets", "Barley"],
      "value": ["sunflower", "sugarbeets", "barley"]
    },
    {
      "text": ["Rice"],
      "value": ["rice"]
    }
  ]

  var x = document.getElementById("soilType");
  var y = document.getElementById("cropType");

  var crops = cropList[x.selectedIndex - 1];

  y.options.length = 0;

  for (var i = 0; i < crops.text.length; i++) {
    var opt = new Option(crops.text[i], crops.value[i]);
    y.add(opt);
  }

}

function submitValue() {
  var moistVal = [
    [542, 870, 460, 880, 736, 512, 830, 839],
    [870, 870, 736, 880, 900, 818, 880],
    [10.23, 614, 102.3, 255, 563],
    [542, 10.23, 910, 839, 830],
    [910, 736, 550, 850],
    [900, 777, 910, 542],
    [800, 800, 800, 800]
  ];

  var soil = document.getElementById("soilType");
  var crop = document.getElementById("cropType");

  document.getElementById("output").innerHTML = "You have selected "+crop.options[crop.selectedIndex].text+" crop, grown in "+soil.options[soil.selectedIndex].text+" soil.\n\nMoisture Level required: <b>"+moistVal[soil.selectedIndex-1][crop.selectedIndex]+"</b>";
  socket.emit("test", moistVal[soil.selectedIndex-1][crop.selectedIndex])
}