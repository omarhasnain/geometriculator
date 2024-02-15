function calculateEllipseArea(){
    
    // calculate ellipse base
    const ellipseBaseInput = document.getElementById('ellipse-base');
    const ellipseBaseText = ellipseBaseInput.value;
    const base = parseFloat(ellipseBaseText);
    ellipseBaseInput.value = '';

    // calculate ellipse height
    const ellipseHeightInput = document.getElementById('ellipse-height');
    const ellipseHeightText = ellipseHeightInput.value;
    const height = parseFloat(ellipseHeightText);
    ellipseHeightInput.value = '';

    // calculate ellipse area
    const area = 3.1416 * base * height;
    console.log('Area is: ', area);

    // display ellipse area
    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = area;

    // display ellipse area in the area calculation section
    displayArea("Ellipse", area);
    

}

// Function to display the calculated area in the "Area Calculation" list
function displayArea(shape, area) {
    // Create a new list item
    var listItem = document.createElement("li");

    // Set the text content of the list item
    listItem.textContent = shape + ": " + area + " cm²";

    // Append the list item to the ul element
    document.getElementById("calculatedAreaList").appendChild(listItem);
}