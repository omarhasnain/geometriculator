function calculateRhombusArea(){
    
    // calculate rhombus base
    const rhombusBaseInput = document.getElementById('rhombus-base');
    const rhombusBaseText = rhombusBaseInput.value;
    const base = parseFloat(rhombusBaseText);
    rhombusBaseInput.value = '';

    // calculate rhombus height
    const rhombusHeightInput = document.getElementById('rhombus-height');
    const rhombusHeightText = rhombusHeightInput.value;
    const height = parseFloat(rhombusHeightText);
    rhombusHeightInput.value = '';

    // calculate rhombus area
    const area = 0.5 * base * height;
    console.log('Area is: ', area);

    // display rhombus area
    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = area;
    

    // ----  display rhombus in area calculation
    displayArea('Rhombus', area);


}

function displayArea(shape, area){
    var listItem = document.createElement('li');
    listItem.textContent = shape + ': ' + area + 'cm²';
    document.getElementById('calculatedAreaList').appendChild(listItem);
}