
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



function numberClicked(number) {
 
    console.log(number)
    
    if(number.innerHTML === 'x') {
        cashed_number = parseInt(result_inner.innerHTML);
        console.log(cashed_number)
        operator = '*';
    }else if(number.innerHTML === '='){
        count();
    }
    else {
        let Check = result_inner.innerHTML.split('');


        if(result_inner.innerHTML === '0') {
            result_inner.innerHTML = number.innerHTML;
            resizeResult()
        } else {
            // Check if there is comma

            // Make array of string
            
            Check.forEach(element => {
                var commaCount = 0;
                if(element === ',') {
                    commaCount++;
                    if(commaCount >= 1) {

                    }
                }
            });
                const OLDresult = result_inner.innerHTML;
                result_inner.innerHTML = OLDresult + number.innerHTML;
                resizeResult()
            

            


            
        }
    }
   
    
}

function count() {

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