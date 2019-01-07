// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}





function handleClick() {

  // prevent refresh 
  d3.event.preventDefault();

  // Grab the datetime value from the filter
  var date = d3.select("#datetime").property("value");

   // Grab the city value from the filter
   var city = d3.select("#city").property("value");

   var country = d3.select("#country").property("value");

   var state = d3.select("#state").property("value");

   var shape = d3.select("#shape").property("value");

  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Check to see if a city was entered and filter the
  // data using that city.
  if (city) {
    // Apply `filter` to the table data to only keep the
    // rows where the `city` value matches the filter value
    filteredData = filteredData.filter(row => row.city === city);
  }

  // Check to see if a country was entered and filter the
  // data using that country.
  if (country) {
    // Apply `filter` to the table data to only keep the
    // rows where the `country` value matches the filter value
    filteredData = filteredData.filter(row => row.country === country);
  }

  if (state) {

    filteredData = filteredData.filter(row => row.state === state);
  }

  if (shape) {

    filteredData = filteredData.filter(row => row.shape === shape);
  }


 // filter the table 
  buildTable(filteredData);
}

// click button event 
d3.selectAll("#filter-btn").on("click", handleClick);



// load page default when page loads 
buildTable(tableData);