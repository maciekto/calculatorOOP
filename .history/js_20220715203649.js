

// Zaznaczanie klasy
function Class(nazwa) {
    return document.querySelector(`.${nazwa}`);
}


// EVENTS
const result = Class('Calc__result');
const result_inner = Class('Calc__result__inner');
const l0 = Class('Calc__0');
const l1 = Class('Calc__1');
const l2 = Class('Calc__2');
const l3 = Class('Calc__3');
const l4 = Class('Calc__4');
const l5 = Class('Calc__5');
const l6 = Class('Calc__6');
const l7 = Class('Calc__7');
const l8 = Class('Calc__8');
const l9 = Class('Calc__9');
const lcomma = Class('Calc__comma');

const isEqual = Class('Calc__isequal');
const x = Class('Calc__multiply');
const plus = Class('Calc__addition');
const minus = Class('Calc__substraction');
const divide = Class('Calc__divide');
const percentages = Class('Calc__percentages');

const AC = Class('Calc__reset');
const opposite = Class('Calc__opposite');



var cashed_number;
var operator = '';
var expression = [];
var isNumberNew = true;
var isOperatorClicked = false;

var allEvents = [x,plus, minus, divide, isEqual, AC, opposite, percentages,l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, lcomma]

allEvents.forEach(element => {
    element.addEventListener('click', select);
});

document.addEventListener('keydown', select);


function select(e) {
    console.log(e)
    AC.innerHTML = 'C';
    const selectedField = e.target.innerHTML;
    switch(selectedField) {
        // MULTIPLY
        case 'x':
            
            casheNumber('*');
            changeOperatorBorder('*');
            isOperatorClicked = true;
        break;

        //ADD
        case '+':
            
            casheNumber('+');
            changeOperatorBorder('+');
            isOperatorClicked = true;
        break;

        //SUBSTRACT
        case '-':
            
            casheNumber('-');
            changeOperatorBorder('-');
            isOperatorClicked = true;
        break;

        //DIVIDE
        case '/':
            
            casheNumber('/');
            changeOperatorBorder('/');
            isOperatorClicked = true;
        break;

        // RESULT
        case '=':
            const transformedNumber = parseFloat(commaAndDotSwitcher('toDOT', result_inner.innerHTML));
            expression.push(transformedNumber);
            result_inner.innerHTML = count();
            isNumberNew = true;
            expression = []
            resizeResult();
            changeOperatorBorder();
        break;

        // Reset
        case 'C':
            AC.innerHTML = 'AC';
            result_inner.innerHTML = '0';
            isNumberNew = true;
        break;

        case 'AC':
            AC.innerHTML = 'AC';
            result_inner.innerHTML = '0';
            isNumberNew = true;

            expression = [];
            isOperatorClicked = false;
            changeOperatorBorder();
        break;
        
        
        case '+/-':
            const transformedNumber2 = parseFloat(commaAndDotSwitcher('toDOT', result_inner.innerHTML));


            if(transformedNumber2 <= 0) {
                const toString = transformedNumber2 * -1;
                result_inner.innerHTML = commaAndDotSwitcher('toCOMMA', toString.toString());
            } else {
                
                if(isOperatorClicked === false) {
                    result_inner.innerHTML = `-${result_inner.innerHTML}`;
                } else {
                    expression[expression.length - 2] = expression[expression.length - 2]*-1;
                    let numberModified = expression[expression.length - 2];
                    result_inner.innerHTML = commaAndDotSwitcher('toCOMMA', numberModified.toString());
                }
            }
        break;
            
        case '%':
            const transformedNumber3 = parseFloat(commaAndDotSwitcher('toDOT', result_inner.innerHTML));

            if(transformedNumber3 <= 0) {
                const toString = transformedNumber3 / 100;
                result_inner.innerHTML = commaAndDotSwitcher('toCOMMA', toString.toString());
            } else {
                
                if(isOperatorClicked === false) {
                    const toString = transformedNumber3 / 100;
                    result_inner.innerHTML = commaAndDotSwitcher('toCOMMA', toString.toString());
                } else {
                    expression[expression.length - 2] = expression[expression.length - 2]/100;
                    let numberModified = expression[expression.length - 2];
                    result_inner.innerHTML = commaAndDotSwitcher('toCOMMA', numberModified.toString());
                }
            }
        break;
        case ',':
            // Read how much commas is in result
            if(commaLimitCheck(result_inner.innerHTML) === true) {
                writeClickedNumber(selectedField)
            }
        break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if(isNumberNew == true) {
                result_inner.innerHTML = selectedField;
                isNumberNew = false;
                isOperatorClicked = false;
    
            } else {
                // Check if there is comma
                writeClickedNumber(selectedField);
                
            }
        break;
        
        
    }
}




// Number and comma clicked
function numberAndCommaClicked(number) {
    AC.innerHTML = 'C';
    if(number === ',') {
        
    } else {
        
    }
}
// function KEYnumberAndCommaClicked(e) {
//     const number = e.key;
//     if(isNumberNew == true) {
//         result_inner.innerHTML = number;
//         isNumberNew = false;
//         isOperatorClicked = false;

//     } else {
//         // Check if there is comma
//         writeClickedNumber(number);
//     }
// }



function count() {
    // Using mathjs library from https://mathjs.org/
    const result = math.evaluate(expressionToString())
    return commaAndDotSwitcher('toCOMMA',result.toString());
    
}

function changeOperatorBorder(operator) {
    clearBorders();
    switch(operator) {
        case '*':
            x.style.cssText = "border: 2px solid #666464";
        break;
        case '+':
            plus.style.cssText = "border: 2px solid #666464";
        break;
        case '-':
            minus.style.cssText = "border: 2px solid #666464";
        break;
        case '/':
            divide.style.cssText = "border: 2px solid #666464";
        break;
    }
    function clearBorders() {
        x.style.cssText = "";
        plus.style.cssText = "";
        minus.style.cssText = "";
        divide.style.cssText = "";
    }
}

function expressionToString() {
    const stringExpression = expression.join(' ');
    return stringExpression;
}


function casheNumber(selectedOperator) {
    console.log(expression)
    if(isOperatorClicked === true) {
        expression[expression.length - 1] = selectedOperator;
        console.log(expression)
    } else {
        const transformedNumber = parseFloat(commaAndDotSwitcher('toDOT', result_inner.innerHTML));
        console.log(expression)
        expression.push(transformedNumber)
        isNumberNew = true;
        console.log(expression)
        expression.push(selectedOperator);
    }
    
} 



// Read how much commas is in the string
// amount: INTEGER - how many commas can be in existing string
// RETURNS true if there is less or equal commas to amount parameter
commaLimitCheck = (string, amount = 1 ) => {
    let Check = string.split('');
    let commaCount = 0;
            
    // Count comma's
    Check.forEach(element => {
        if(element === ',') {
            commaCount+=1;
        }
    });

    if(commaCount < amount) {
        return true;
    } else {
        return false;
    }
}


// Switch comma to dot or dot to comma
// operation: toDOT or toCOMMA
// RETURNS string with switched commas or dots
commaAndDotSwitcher = (operation, string) => {
    let Check = string.split('');
    let stringFromArray = '';

    if(operation === 'toDOT') {
            Check.forEach((element, index) => {
                if(element === ',') {
                    Check[index] = '.';
                    stringFromArray += Check[index];
                } else {
                    stringFromArray += Check[index];
                }

            });
            // Convert to string and return
            return stringFromArray;
    } else if (operation === 'toCOMMA') {
        Check.forEach((element, index) => {
            if(element === '.') {
                Check[index] = ',';
                stringFromArray += Check[index];
            } else {
                stringFromArray += Check[index];
            }

        });
        // Convert to string and return
        return stringFromArray;
    }
}

// Write clicked number to the result inner div
function writeClickedNumber(number) {
    const OLDresult = result_inner.innerHTML;
    result_inner.innerHTML = OLDresult + number;
    resizeResult()
}

// Resize inner result div dependent of how much text is inside
function resizeResult() {
    if(result_inner.clientWidth > result.clientWidth) {

        while(result_inner.clientWidth>result.clientWidth) {
            var style = window.getComputedStyle(result, null).getPropertyValue('font-size');
            var fontSizee = parseFloat(style); 
            result.style.fontSize = (fontSizee - 1) +'px';
        }
    }
}

