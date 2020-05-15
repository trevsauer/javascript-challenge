// from data.js
var tableData = data;

// take in the table using D3 and the HTML ID 

var tableBody = d3.select('tableBody');

// do a "for each" loop to query each object in the data
tableData.forEach((sighting) => {

    // retreive the row from the html tag 
    // and re-establish the variable name for the location
    var row = tableBody.append('tr');


    // do a forEach loop through the key value pairs using Object.entries
    // then append the value to each column within the table 
    // which adds a new row for each row of new data
    Object.entries(sighting).forEach(([key, value]) => {

        var sightingData = row.append('td');
        sightingData.text(value);

    });
});

var button = d3.select('#filter-btn');

var form = d3.select('form')

button.on('click', runEnter);

form.on('submit', runEnter)

funtion runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select('#datetime');

    var inputValue = inputElement.property('value');
    console.log(inputValue);

    var dataFiltered = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(dataFiltered);
    tableBody.html("");

    
    dataFiltered.forEach((search) => {

        var row = tableBody.append('tr');

        Object.entries(search).forEach(([key, value]) => {

            var sightingInfo = row.append('td');

            sightingInfo.text(value);

        });
    });
};

