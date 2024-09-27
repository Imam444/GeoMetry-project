

function calculateParallelogramArea(){
    // get base parallelogram
    const baseInput =document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText)
    console.log(base)

    // get height with parallelogram
     const heightInput= document.getElementById('parallelogram-height');
     const heightText = heightInput.value;
     const height = parseFloat(heightText);
     console.log(height)

    //  get area width parallelogram

    const area = base * height;
    console.log('area of parallelogram is:',area)

    // display Parallelogram 
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText =area;
     
}