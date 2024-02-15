function calculatePentagonArea(){
    
    // calculate pentagon base
    const pentagonBaseInput = document.getElementById('pentagon-base');
    const pentagonBaseText = pentagonBaseInput.value;
    const base = parseFloat(pentagonBaseText);
    pentagonBaseInput.value = '';

    // calculate pentagon height
    const pentagonHeightInput = document.getElementById('pentagon-height');
    const pentagonHeightText = pentagonHeightInput.value;
    const height = parseFloat(pentagonHeightText);
    pentagonHeightInput.value = '';

    // calculate pentagon area
    const area = 0.5 * base * height;
    console.log('Area is: ', area);

    // display pentagon area
    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = area;
    

    // ----  display pentagon in area calculation
    displayArea('Pentagon', area);


}

function displayArea(shape, area){
    var listItem = document.createElement('li');
    listItem.textContent = shape + ': ' + area + 'cm²';
    document.getElementById('calculatedAreaList').appendChild(listItem);
}