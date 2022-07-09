
// Zaznaczanie klasy
function Class(nazwa) {
    return document.querySelector(`.${nazwa}`);
}

const result = Class('Calc__result');
const result_inner = Class('Calc__result__inner');
const x = Class('Calc__multiply');
const plus = Class('Calc__addition');
const minus = Class('Calc__substraction');
const divide = Class('Calc__divide');


var cashed_number;
var operator = '';


var isNumberNew = true;

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

var events = [l0, l1, l2, l3, l4, l5, l6, l7, l8, l9,lcomma, x,plus, minus, divide, isEqual];

events.forEach(element => {
    element.addEventListener('click', () => numberClicked(element));
});


// Function applied after click
function numberClicked(number) {
    console.log(number.innerHTML)
    switch(number.innerHTML) {

        // MULTIPLY
        case 'x':
            
            cashed_number = parseFloat(commaTransform('toDOT', result_inner.innerHTML));
            operator = '*';
            isNumberNew = true;
        break;
        case '+':
            
            cashed_number = parseFloat(commaTransform('toDOT', result_inner.innerHTML));
            operator = '+';
            isNumberNew = true;
        break;
        case '-':
            
            cashed_number = parseFloat(commaTransform('toDOT', result_inner.innerHTML));
            operator = '-';
            isNumberNew = true;
        break;
        case '/':
            
            cashed_number = parseFloat(commaTransform('toDOT', result_inner.innerHTML));
            operator = '/';
            isNumberNew = true;
        break;

        // RESULT
        case '=':
            result_inner.innerHTML = count(result_inner.innerHTML);
        break;

        // COMMA
        case ',':
            
            // Read how much commas is in result
            commaCount = commaLimitCheck(result_inner.innerHTML);
    
            // Limit amount of comma to one
            const OLDresult = result_inner.innerHTML;
            if(commaCount === 1) {
                result_inner.innerHTML = OLDresult;
            } else {
                updateResult(number);
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
                result_inner.innerHTML = number.innerHTML;
                isNumberNew = false;

            } else {
                // Check if there is comma
                updateResult(number);
                
            }
        break;
    }
}



function count(result) {
    let newNumber;
    newNumber = parseFloat(commaTransform('toDOT', result));
    let endResult;
    
    switch(operator) {
        case '*':
            endResult = cashed_number*newNumber
            return commaTransform('toCOMMA',endResult.toString());
        break;
        case '+':
            endResult = cashed_number+newNumber
            return commaTransform('toCOMMA',endResult.toString());
        break;
        case '-':
            endResult = cashed_number-newNumber
            return commaTransform('toCOMMA',endResult.toString());
        break;
        case '/':
            endResult = cashed_number/newNumber
            return commaTransform('toCOMMA',endResult.toString());
        break;
    }
}


commaLimitCheck = (string) => {
    let Check = string.split('');
    let commaCount = 0;
            
    // Count comma's
    Check.forEach(element => {
        if(element === ',') {
            commaCount+=1;
        }
    });
    return commaCount;
}


// type: toDOT or toCOMMA
commaTransform = (type, string) => {
    console.log(string)
    let Check = string.split('');
    let stringFromArray = '';

    if(type === 'toDOT') {
        
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
    } else if (type === 'toCOMMA') {
        

        
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



function updateResult(number) {
    const OLDresult = result_inner.innerHTML;
    result_inner.innerHTML = OLDresult + number.innerHTML;
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

console.log(l1)



























































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