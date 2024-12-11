
let contTopMenuLi = document.querySelectorAll('.contTopMenu li');
let custContent_1 = document.querySelector('.custContent_1');
let custContent_2 = document.querySelector('.custContent_2');

contTopMenuLi.forEach(element => {
    element.addEventListener('click', function (e) {
        contTopMenuLi[0].classList.remove('on')
        contTopMenuLi[1].classList.remove('on')
        element.classList.add('on')
        if (contTopMenuLi[0].classList.contains('on')) {
            console.log('11111111111')
            custContent_1.classList.add('on')
            custContent_2.classList.remove('on')
        } else if (contTopMenuLi[1].classList.contains('on')) {
            custContent_2.classList.add('on')
            custContent_1.classList.remove('on')




        }
    })
});