var a = prompt('Podaj Wartość dla : a');
var b = prompt('Podaj Wartość dla : b');
var value = 0;

value = (a*a)+(2*a*b)-(b*b);

alert('zmienna a: ' + a + ' zmienna b: ' + b + ' wynik z działania (a*a)+(2*a*b)-(b*b) ' + value);

console.log('zmienna a: ' + a + ' zmienna b: ' + b + ' wynik z działania (a*a)+(2*a*b)-(b*b) ' + value); 

if (value > 0) {
    alert('zmienna value z działania (a*a)+(2*a*b)-(b*b) jest wieksza od 0 i ma wartosc ' + value);
    console.log('zmienna value z działania (a*a)+(2*a*b)-(b*b) jest wieksza od 0 i ma wartosc ' + value);
} else if (value < 0) {
    alert('zmienna value z działania (a*a)+(2*a*b)-(b*b) jest mniejsza od 0 i ma wartosc ' + value);
    console.log('zmienna value z działania (a*a)+(2*a*b)-(b*b) jest mniejsza od 0 i ma wartosc ' + value);
} else if (value === 0) {
    alert('zmienna value z działania (a*a)+(2*a*b)-(b*b) jest równa 0  i ma wartosc ' + value);
    console.log('zmienna value z działania (a*a)+(2*a*b)-(b*b) jest równa 0  i ma wartosc ' + value);
} else {
    alert('zmienna value z działania (a*a)+(2*a*b)-(b*b) jest nieokreslona ' + value);
    console.log('zmienna value z działania (a*a)+(2*a*b)-(b*b) jest nieokreslona ' + value);
}