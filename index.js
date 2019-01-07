// Getting references
var $tbody = document.querySelector("#table-body");

var $cityinput = document.querySelector("#city");
var $stateinput = document.querySelector("#state");
var $countryinput = document.querySelector("#country");
var $shapeinput = document.querySelector("#shape");
var $dateinput = document.querySelector("#datetime");




var $submitButton = document.querySelector("#submit");

// Filtered list
var filteredReviews = dataSet;

// Set starting index and results per page
var startingIndex = 0;
var resultsPerPage = 1000;

// Rendering table
renderTable();

// Function to render table
function renderTable() {

    // Set the value of ending index
    var endingIndex = startingIndex + resultsPerPage;

    // Looping through data set
    for (var i = 0; i < filteredReviews.length; i++) {
    
        // Insert a row
        var $row = $tbody.insertRow(i);

        // Get current object & keys
        var currentReview = filteredReviews[i];
        var fields = Object.keys(currentReview);

        // Insert filteredReviews
        for(var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = currentReview[field];
        };
    };
};

// Event listener for submit button
$submitButton.addEventListener("click", filterInput);




// Function to filter variety
function filterstate(review) {
    return review.state == $stateinput.value.trim();
};
// filter for state
function filtercountry(review) {
    return review.country == $countryinput.value.trim();
};

// filter for taster name
function filtershape(review) {
    return review.shape == $shapeinput.value.trim();
};

// Function to filter winery
function filtercity(review) {
    return review.city == $cityinput.value.trim();
};

// Function to filter price
function filterdate(review) {
    return review.date == $dateinput.value.trim();
};



// Function to filter input
function filterInput(event) {

    // Prevent default
    event.preventDefault();

    // Reseting data set each time button is clicked
    filteredReviews = dataSet;

    var $cityinput = document.querySelector("#city");
var $stateinput = document.querySelector("#state");
var $countryinput = document.querySelector("#country");
var $shapeinput = document.querySelector("#shape");
var $dateinput = document.querySelector("#datetime");
    // Filters

    // if ($countryInput.value) {
    //     filteredReviews = filteredReviews.filter(filterCountry);
    // };

    if ($cityinput.value) {
        filteredReviews = filteredReviews.filter(filtercity);
    };

    if ($stateinput.value) {
        filteredReviews = filteredReviews.filter(filterstate);
    };

    if ($countryinput.value) {
        filteredReviews = filteredReviews.filter(filtercountry);
    };

    if ($shapeinput.value) {
        filteredReviews = filteredReviews.filter(filtershape);
    };

    if ($dateinput.value) {
        filteredReviews = filteredReviews.filter(filterdate);
    };

    if (!$dateinput && !$stateinput && !$countryinput && !$shapeinput && !$cityinput) {
        filteredReviews = dataSet;
    };

    // Reset inputs

    $dateinput.value = "";
    $stateinput.value = "";
    $countryinput.value = "";
    $shapeinput.value = "";
    $cityinput.value = "";

    // Re-render table
    $tbody.innerHTML = "";
    renderTable();
};