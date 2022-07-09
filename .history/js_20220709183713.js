
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

const AC = Class('Calc__reset');



var cashed_number;
var operator = '';
var expression = [];
var isNumberNew = true;


var signEvents = [x,plus, minus, divide, isEqual, AC];
var numberEvents = [l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, lcomma]
signEvents.forEach(element => {
    element.addEventListener('click', () => signClicked(element.innerHTML));
});
numberEvents.forEach(element => {
    element.addEventListener('click', () => numberAndCommaClicked(element.innerHTML));
});


function signClicked(sign) {
    switch(sign) {
        // MULTIPLY
        case 'x':
            casheNumber('*');
        break;

        //ADD
        case '+':
            casheNumber('+');
        break;

        //SUBSTRACT
        case '-':
            casheNumber('-');
        break;

        //DIVIDE
        case '/':
            casheNumber('/');
        break;

        // RESULT
        case '=':
            result_inner.innerHTML = count();
            resizeResult();
        break;

        case 'AC':
            result_inner.innerHTML = '0';
            isNumberNew = true;
        break;

        // COMMA
        
    }
}


// Number and comma clicked
function numberAndCommaClicked(number) {
    if(number === ',') {
        // Read how much commas is in result
        if(commaLimitCheck(result_inner.innerHTML) === true) {
            writeClickedNumber(number)
        }
    } else {
        if(isNumberNew == true) {
            result_inner.innerHTML = number;
            isNumberNew = false;

        } else {
            // Check if there is comma
            writeClickedNumber(number);
            
        }
    }
}



function count() {
    let newNumber;
    const transformedNumber = parseFloat(commaAndDotSwitcher('toDOT', result_inner.innerHTML));
    expression.push(transformedNumber);
    expressionToString();
    // switch(operator) {
    //     case '*':
    //         endResult = cashed_number*newNumber
    //         return commaAndDotSwitcher('toCOMMA',endResult.toString());
    //     break;
    //     case '+':
    //         endResult = cashed_number+newNumber
    //         return commaAndDotSwitcher('toCOMMA',endResult.toString());
    //     break;
    //     case '-':
    //         endResult = cashed_number-newNumber
    //         return commaAndDotSwitcher('toCOMMA',endResult.toString());
    //     break;
    //     case '/':
    //         endResult = cashed_number/newNumber
    //         return commaAndDotSwitcher('toCOMMA',endResult.toString());
    //     break;
    // }
}


function expressionToString() {
    const stringExpression = expression.join(' ');
    console.log(stringExpression)
}


function casheNumber(selectedOperator) {
    const transformedNumber = parseFloat(commaAndDotSwitcher('toDOT', result_inner.innerHTML));
    expression.push(transformedNumber)
    isNumberNew = true;
    expression.push(selectedOperator);
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




























































// inputy liczb
// inputy orange
// input procent
// input odwrotność
// input reset

// 1. po klinięciu liczba jest zapisywana jako aktywna, jeżeli jest dodana następna liczba jest dodawana do pierwszej w stringu

// 2. Po kliniuęciu jakiegoś przycisku z orange jest dodawana flaga co będzie z tą liczbą robione

// 3. Wprowadzenie następnej liczby

// 4. Wynik


// 5. Resetowanie liczby jako resetowanie zmiennej przechowującej wyrażenie