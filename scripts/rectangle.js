function calculateRectangleArea(){
    
    // calculate width
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleAreaText = rectangleWidthInput.value;
    const width = parseFloat(rectangleAreaText);
    // console.log(typeof width);

    // calculate length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    // console.log(length);

    // calculate area
    const area = width * length;
    console.log('Area is:', area);

    // display rectangle area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;

}