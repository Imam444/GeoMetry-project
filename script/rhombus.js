function calculateRhombusArea(){
    // get diagonal1 area  with rhombus
    const diagonal1Input = document.getElementById('rhombus-diagonal1')
    const diagonal1Text = diagonal1Input.value;
    const diagonal1 = parseFloat(diagonal1Text)
    console.log(diagonal1);

    // get diagonal2 area with rhombus
    const diagonal2Input= document.getElementById('rhombus-diagonal2');
    const diagonal2Text = diagonal2Input.value;
    const diagonal2 =parseFloat(diagonal2Text)
    console.log(diagonal2)

    // get area with rhombus

    const Area = diagonal1 * diagonal2;
    console.log('Area of rhombus is:',Area)

    // display area of rhombus
    const  rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = Area;

}