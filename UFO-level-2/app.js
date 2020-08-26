// from data.js
var tableData = data;
var tbody = d3.select("tbody");

//loop through data and console.log each data object
data.forEach(function(data) {
    console.log(data);
});

//append one table row 'tr' for each object
data.forEach(function(data){
    var row = tbody.append("tr");
    Object.entries(data).forEach(function([key, value]){
    console.log(key, value);
    //use d3 to append 1 cell per object
    var cell = row.append("td");
    //update each cell
    cell.text(value);

    });
});

//select button form create event
var button = d3.select("#filter-btn");
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

//select input element and value property of input 
function runEnter() {
d3.event.preventDefault();
var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");

console.log(inputValue);
console.log(tableData);

var filteredData = tableData.filter((inputdata) => inputdata.datetime === inputValue ||
                                                   inputdata.city === inputValue ||
                                                   inputdata.state === inputValue ||
                                                   inputdata.country === inputValue ||
                                                   inputdata.shape === inputValue );

console.log(filteredData);


 tbody.html("");

 filteredData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
