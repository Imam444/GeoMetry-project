function calculatePentagonArea(){
    const perimeter =getPentagonInput('pentagon-perimeter')
    const base =getPentagonInput('pentagon-base')


    const area =0.5 * perimeter * base;
    setText('pentagon-area', area)

}

function getPentagonInput(inputFieldId){
    const inputField= document.getElementById(inputFieldId)
    const inputValueText = inputField.value;
    const value =parseFloat(inputValueText);
    return value;
}

function setText(elementId, area){
    const element =document.getElementById(elementId)
    element.innerText = area; 
}