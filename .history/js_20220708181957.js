
// Zaznaczanie klasy
function Class(nazwa) {
    return document.querySelector(`.${nazwa}`);
}

const result = Class('Calc__result');
const result_inner = Class('Calc__result__inner');
const x = Class('Calc__multiply');


let result_number;
let cashed_number;
let operator;

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

var liczby = [l0, l1, l2, l3, l4, l5, l6, l7, l8, l9,lcomma, x];

liczby.forEach(element => {
    element.addEventListener('click', () => numberClicked(element));
});


// Function applied after click
function numberClicked(number) {
    switch(number.innerHTML) {

        // MULTIPLY
        case 'x':
            cashed_number = parseInt(result_inner.innerHTML);
            console.log(cashed_number)
            operator = '*';
        break;

        // RESULT
        case '=':
            count();
        break;

        // COMMA
        case ',':
            let Check = result_inner.innerHTML.split('');
            let commaCount = 0;
                
            Check.forEach(element => {
                
                if(element === ',') {
                    commaCount+=1;
                    console.log(commaCount)
                }
            });
    
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

function updateResult(number) {
    const OLDresult = result_inner.innerHTML;
    result_inner.innerHTML = OLDresult + number.innerHTML;
    resizeResult()
}

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