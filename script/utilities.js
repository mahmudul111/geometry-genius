function areaCalculation(idName){
    const firstInputField = document.getElementById(idName);
    const firstInputValueString = firstInputField.value;
    const firstInputValue = parseFloat(firstInputValueString);
    return firstInputValue;
}
function areaResult(idName, totalArea){
    const totalAreaResult = document.getElementById(idName);
    totalAreaResult.innerText = totalArea;
}

// function addToCalculationLog(areaType, areaValue){
    
// }