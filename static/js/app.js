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


