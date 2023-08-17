function areaCalculationField(){
    // base value
    const baseInput = document.getElementById('base-input');
    const baseValueString = baseInput.value ;
    const baseValue = parseFloat(baseValueString);
    
    // height input field

    const heightInput = document.getElementById('height-input');
    const heightValueString = heightInput.value ;
    const heightValue = parseFloat(heightValueString);

    const totalCalculation = (baseValue * heightValue)/2;
    const displayResult = document.getElementById('result-area');
    displayResult.innerText = totalCalculation;

}


function rectangleAreaCalculation(){
    // width area calculation
    const rectangleWidthInput = document.getElementById('width-rectangle');
    const rectangleWidthValueString = rectangleWidthInput.value ;
    const rectangleWidthValue = parseFloat(rectangleWidthValueString);

    // length area calculation
    const rectangleLengthInput = document.getElementById('length-rectangle');
    const rectangleLengthValueString = rectangleLengthInput.value;
    const rectangleLengthValue = parseFloat(rectangleLengthValueString);

    const rectangleCalculation = rectangleWidthValue * rectangleLengthValue;

    const resultRectangle = document.getElementById('result-rectangle');
    resultRectangle.innerText = rectangleCalculation;



}


// use functional system from here

function baseFunction(){
    const parallelogramBase= areaCalculation('base-parallelogram');
    const parallelogramHeight = areaCalculation('height-parallelogram');
    const parallelogramResult = parallelogramBase * parallelogramHeight;
    areaResult('result-parallelogram', parallelogramResult);
}


