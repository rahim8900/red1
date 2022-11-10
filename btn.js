let body = document.querySelector('body');
let lovhe = document.querySelector('.lovhe');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let imgboom = document.querySelector('boom');
let s = 1;
red.addEventListener('click', fred);
blue.addEventListener('click', fblue1);
function fred(e) {
    (s = 1)
    return alert(`BOOM!!! Proses durdu.`);
}
function fblue1(e) {
    alert(`${s}`);

    if (s == 3) {
        alert('atalar 3-den deyib');
    }
    if(s==2){
        alert('her sey cutlu yaradilib');
    }
    if(s==4){
        alert('4 esas unsur var: od, su, torpaq, hava');
    }
    s++;
}
