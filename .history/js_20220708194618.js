
// Zaznaczanie klasy
function Class(nazwa) {
    return document.querySelector(`.${nazwa}`);
}

const result = Class('Calc__result');
const result_inner = Class('Calc__result__inner');
const x = Class('Calc__multiply');


var result_number;
var cashed_number;
var operator;

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

var events = [l0, l1, l2, l3, l4, l5, l6, l7, l8, l9,lcomma, x];

events.forEach(element => {
    element.addEventListener('click', () => numberClicked(element));
});


// Function applied after click
function numberClicked(number) {
    switch(number.innerHTML) {

        // MULTIPLY
        case 'x':
            
            cashed_number = parseFloat(commaCheck('transform', result_inner));
            console.log(cashed_number)
            operator = '*';
        break;

        // RESULT
        case '=':
            count();
        break;

        // COMMA
        case ',':
            
            // Read how much commas is in result
            commaCount = commaCheck('limit', result_inner);
    
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
            if(result_inner.innerHTML === '0') {
                result_inner.innerHTML = number.innerHTML;

            } else {
                // Check if there is comma
                updateResult(number);
            }
        break;
    }
}



function count() {
    
}
// arg 1: 'limit' = limit comma, 'transform' = transform commas to dots, arg2: string
function commaCheck(arg1, string) {

    // Convert string to Array
    let Check = string.innerHTML.split('');

    
    switch(arg1) {

        case 'limit':
            let commaCount = 0;
            
            // Count comma's
            Check.forEach(element => {
                if(element === ',') {
                    commaCount+=1;
                }
            });
            return commaCount;
        break;


        case 'transform':
            let stringFromArray = '';
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
        break;
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