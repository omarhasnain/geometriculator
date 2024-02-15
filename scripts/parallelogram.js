function calculateParallelogramArea(){
    
    // calculate parallelogram base
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    parallelogramBaseInput.value = '';

    // calculate parallelogram height
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    parallelogramHeightInput.value = '';

    // calculate parallelogram area
    const area = base * height;
    console.log('Area is: ', area);

    // display parallelogram area
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;
    

    // ----  display Parallelogram in area calculation
    displayArea('Parallelogram', area);


}

function displayArea(shape, area){
    var listItem = document.createElement('li');
    listItem.textContent = shape + ': ' + area + 'cm²';
    document.getElementById('calculatedAreaList').appendChild(listItem);
}