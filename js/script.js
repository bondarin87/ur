
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let btn = document.querySelector('#btn');
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
 a.addEventListener('focus', function () {
        a.value = '';
    })
    b.addEventListener('focus', function () {
        b.value = '';
    })
    c.addEventListener('focus', function () {
        c.value = '';
    })

btn.addEventListener('click', function func() {
    let elem1 = document.querySelector('#elem1');
    let elem2 = document.querySelector('#elem2');
    let elem3 = document.querySelector('#elem3');
 let d = (Number(b.value)**2) - (4*Number(a.value))*(Number(c.value)); 
 
    if (d > 0) {
        let x1 = d;
        let x2 =((-b.value-Math.sqrt(+d)))/(2*(+a.value));
        let x3 =((-b.value+Math.sqrt(+d)))/(2*(+a.value));
        elem1.textContent = x1;
        elem2.textContent = x2;
        elem3.textContent = x3;
    
    
    } else if (d == 0) {

        elem1.textContent = elem1.textContent + ' ' + d;
        elem2.textContent = elem2.textContent + (-((+b.value)/(2*(+a.value))));
        elem3.textContent = elem3.textContent + (-((+b.value)/(2*(+a.value))));


    } else {
        elem1.textContent = elem1.textContent + ' ' + d;
        elem2.textContent = elem2.textContent + ' no existe';
        elem3.textContent = elem3.textContent + ' no existe'
    }

   
  
    
})














