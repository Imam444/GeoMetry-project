// get triangle base value
function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base')
    const triangleBaseText = triangleBaseInput.value;
    const base = parseInt(triangleBaseText)
    console.log(base)
    // get triangleHeight vaue
    const triangleHeightInput = document.getElementById('triangle-height')
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    console.log(height);

    // get calculate Area
    const Area =0.5*base*height;
    console.log('area of the triangle is:',Area)

    // display triangle Area
    const TriangleAreaSpan =document.getElementById('triangle-area');
    TriangleAreaSpan.innerText = Area;
}