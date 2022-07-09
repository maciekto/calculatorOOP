console.log('siemano')

function div(nazwa) {
    return document.querySelector(`.${nazwa}`);
}

class Calculator {
    constructor(l1, l2, l3) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
}



var divek = {
    wysokosc: 'stojący'
}

const l0 = div('Calc__0');
const l1 = div('Calc__1');
const l2 = div('Calc__2');
const l3 = div('Calc__3');
const l4 = div('Calc__4');
const l5 = div('Calc__5');
const l6 = div('Calc__6');
const l7 = div('Calc__7');
const l8 = div('Calc__8');
const l9 = div('Calc__9');

var liczby = [l0, l1, l2, l3, l4, l5, l6, l7, l8, l9];

liczby.forEach((element, index) => {
    element.addEventListener('click', () => numberClicked(element));
});

function numberClicked(number) {
    console.log(number.innerHTML)
}

console.log(l1)
console.log(divek.wysokosc)



























































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