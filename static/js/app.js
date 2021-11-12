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
}