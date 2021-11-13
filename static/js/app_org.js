// import the data from data.js
const tableData = data;
//Refrence the HTML table using d3
var tbody = d3.select("tbody");

//function to set up html table using data array
function buildTable(data) {
    //clears table
    tbody.html("");
    //loops through data array and pulls in each object
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        //loops through each object and puts each value in table
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

function handleClick() {
    //gets datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check to see if a date was entred and filter the data using that date
    if (date) {
        //applying filter to data
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //calling funtion used to build table from filtered data
    buildTable(filteredData);
};

//listens for button click and builds filtered table using handleClick function above
d3.selectAll("#filter-btn").on("click", handleClick);

//loads full data set to table when page originally loads
buildTable(tableData);