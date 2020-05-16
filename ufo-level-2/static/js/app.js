// from data.js
var tableData = data;

// take in the table using D3 and the HTML ID 

var tbody = d3.select('tbody');

// do a "for each" loop to query each object in the data
tableData.forEach((sighting) => {

    // retreive the row from the html tag 
    // and re-establish the variable name for the location
    var row = tbody.append('tr');

    // do a forEach loop through the key value pairs using Object.entries
    // then append the value to each column within the table 
    // which adds a new row for each row of new data
    Object.entries(sighting).forEach(([key, value]) => {

        var sightingData = row.append('td');
        sightingData.text(value);

    });
});

// create the form and button variables to hold the html selectors
var button = d3.select('#filter-btn');
var form = d3.select('form')

// run function for when event listeners are activated
button.on('click', runEnter);
form.on('submit', runEnter);

function runEnter() {

    // prevent issues from default
    d3.event.preventDefault();

    // select the tag where the user inserted an input
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    //filter data by user input value
    var dataFiltered = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(dataFiltered);

    // remove current html displaying table
    tbody.html("");


    // search through filtered data and display results 
    dataFiltered.forEach((search) => {
    
        var row = tbody.append("tr");
    
        Object.entries(search).forEach(([key, value]) => {
    
            var sightingInfo = row.append("td");
    
            sightingInfo.text(value);

        });
    });
};

// use multiple input tags and/or select dropdowns, 
// write JavaScript code so the user can to set multiple filters 
// and search for UFO sightings 
// using the following criteria based on the table columns:

// date/time
// city
// state
// country
// shape 

// set dates variable
var dates = data.map(object => object.datetime);

// remove the duplicated dates
var filterDate = dates.filter((item, index) => dates.indexOf(item) === index);

// set date selection dropdownw/ html
var dateSelection = d3.select("#dateDataset");

// go through the list of dates and append the date text and value to html
// this will in turn show the option for individual dates within the dropdown
// compiling the dates together so that there are no duplicates
filterDate.forEach((date) => {

    var dateSelect = dateSelection.append('option');
    dateSelect.text(date);
    dateSelect.attr('value', `${date}`);
});

//---------------------------------

// set cities variable
var cities = data.map(object => object.city).sort();

// remove the duplicated cities
var filterCity = cities.filter((item, index) => cities.indexOf(item) === index);

// set city selection dropdown html
var citySelection = d3.select('#cityDataset');

// go through the list of cities and append the city text and value to html
// this will in turn show the option for individual cities within the dropdown
// compiling the cities together so that there are no duplicates
filterCity.forEach((city) => {

    var citySelect = citySelection.append('option');
    citySelect.text(city);
    citySelect.attr("value", `${city}`);
});

//---------------------------------

// set states variable
var states = data.map(object => object.state).sort();

// remove the duplicated states
var filterState = states.filter((item, index) => states.indexOf(item) === index);

// set state selection dropdown html
var stateSelection = d3.select('#stateDataset');

// go through the list of states and append the state text and value to html
// this will in turn show the option for individual states within the dropdown
// compiling the states together so that there are no duplicates
filterState.forEach((state) => {

    var stateSelect = stateSelection.append('option');
    stateSelect.text(state);
    stateSelect.attr("value", `${state}`);
});

//---------------------------------

// set countries variable
var countries = data.map(object => object.country).sort();

// remove the duplicated countries
var filterCountry = countries.filter((item, index) => countries.indexOf(item) === index);

// set country selection dropdown html
var countrySelection = d3.select('#countryDataset');

// go through the list of countries and append the country text and value to html
// this will in turn show the option for individual countries within the dropdown
// compiling the countries together so that there are no duplicates
filterCountry.forEach((country) => {

    var countrySelect = countrySelection.append('option');
    countrySelect.text(country);
    countrySelect.attr("value", `${country}`);
});

//---------------------------------

// set shapes variable
var shapes = data.map(object => object.shape).sort();

// remove the duplicated shapes
var filterShape = shapes.filter((item, index) => shapes.indexOf(item) === index);

// set shape selection dropdown html
var shapeSelection = d3.select('#shapeDataset');

// go through the list of shapes and append the shape text and value to html
// this will in turn show the option for individual shapes within the dropdown
// compiling the shapes together so that there are no duplicates
filterShape.forEach((shape) => {

    var shapeSelect = shapeSelection.append('option');
    shapeSelect.text(shape);
    shapeSelect.attr("value", `${shape}`);
});

//---------------------------------
//---------------------------------
//---------------------------------


// filter the date by creating filter and function 
// to organize data based on the option from dropdown menu

d3.selectAll("#dateDataset").on("change", sortDateData);

function sortDateData() {

    var dateDropDown = d3.select("#dateDataset");

    var dateValue = dateDropDown.property("value");

    var dataFiltered = tableData.filter(tableData => tableData.datetime === dateValue);
    console.log(dataFiltered);

    tbody.html("");

    dataFiltered.forEach((search) => {
    
        var row = tbody.append("tr");
    
        Object.entries(search).forEach(([key, value]) => {
    
            var sightingInfo = row.append("td");
            sightingInfo.text(value);

        });
    });
};

//---------------------------------

// filter the city by creating filter and function 
// to organize data based on the option from dropdown menu

d3.selectAll("#cityDataset").on("change", sortCityData);

function sortCityData() {

    var cityDropDown = d3.select("#cityDataset");

    var cityValue = cityDropDown.property("value");

    var dataFiltered = tableData.filter(tableData => tableData.city === cityValue);
    console.log(dataFiltered);

    tbody.html("");

    dataFiltered.forEach((search) => {
    
        var row = tbody.append("tr");
    
        Object.entries(search).forEach(([key, value]) => {
    
            var sightingInfo = row.append("td");
            sightingInfo.text(value);

        });
    });
};

//---------------------------------

// filter the state by creating filter and function 
// to organize data based on the option from dropdown menu

d3.selectAll("#stateDataset").on("change", sortStateData);

function sortStateData() {

    var stateDropDown = d3.select("#stateDataset");

    var stateValue = stateDropDown.property("value");

    var dataFiltered = tableData.filter(tableData => tableData.state === stateValue);
    console.log(dataFiltered);

    tbody.html("");

    dataFiltered.forEach((search) => {
    
        var row = tbody.append("tr");
    
        Object.entries(search).forEach(([key, value]) => {
    
            var sightingInfo = row.append("td");
            sightingInfo.text(value);

        });
    });
};

//---------------------------------

// filter the country by creating filter and function 
// to organize data based on the option from dropdown menu

d3.selectAll("#countryDataset").on("change", sortCountryData);

function sortCountryData() {

    var countryDropDown = d3.select("#countryDataset");

    var countryValue = countryDropDown.property("value");

    var dataFiltered = tableData.filter(tableData => tableData.country === countryValue);
    
    console.log(dataFiltered);

    tbody.html("");

    dataFiltered.forEach((search) => {
    
        var row = tbody.append("tr");
    
        Object.entries(search).forEach(([key, value]) => {
    
            var sightingInfo = row.append("td");
            sightingInfo.text(value);

        });
    });
};

//---------------------------------

// filter the shape by creating filter and function 
// to organize data based on the option from dropdown menu

d3.selectAll("#shapeDataset").on("change", sortShapeData);

function sortShapeData() {

    var shapeDropDown = d3.select("#shapeDataset");

    var shapeValue = shapeDropDown.property("value");

    var dataFiltered = tableData.filter(tableData => tableData.shape === shapeValue);
    
    console.log(dataFiltered);

    tbody.html("");

    dataFiltered.forEach((search) => {
    
        var row = tbody.append("tr");
    
        Object.entries(search).forEach(([key, value]) => {
    
            var sightingInfo = row.append("td");
            sightingInfo.text(value);

        });
    });
};


