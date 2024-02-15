// Get Base, height of a triangle, calculate the area using provided formula
// then display the area
// Get base value
// added an id in the base input field
// use getelementbyid to access the input field
// get value frome the input field (value is string now)
// convert the value to  a number. use parseFloat (vognangsho output er jonno)


//----- triangle calculation -------
// function calculateTriangleArea(){
//     const triangleBaseInput = document.getElementById('triangle-base');
//     const triangleBaseText = triangleBaseInput.value;
//     const base = parseFloat(triangleBaseText);
//     console.log(base);
// }



function calculateTriangleArea(){
    // --- triangle base value -----
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(base);

    // ---- triangle height -----
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);

    // --- calculate triangle area ----
    const area = 0.5 * base * height;
    console.log('Area is:', area);

    // --- display triangle area ---
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

    // ----  display triangle in area calculation
    displayArea('Triangle', area);


}

function displayArea(shape, area){
    var listItem = document.createElement('li');
    listItem.textContent = shape + ': ' + area + 'cm²';
    document.getElementById('calculatedAreaList').appendChild(listItem);
}