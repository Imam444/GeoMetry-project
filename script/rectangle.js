function calculateRectangleArea(){ 
    // get length with rectangle
    const lengthInput = document.getElementById('rectangle-Length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText)
    console.log(length); 

    // get width with rectangle

    const widthInput = document.getElementById('rectangle-width')
    const widthText = widthInput.value;
    const width = parseFloat(widthText)
    console.log(width)

    // calculate rectangle Area;
    const Area = length * width;
    console.log('Area of rectangle:',Area);

    // display Rectangle Area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = Area;
} 