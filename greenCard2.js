
let contTopMenuLi = document.querySelectorAll('.contTopMenu li');
let custContent_1 = document.querySelectorAll('.custContent_1');
let custContent_2= document.querySelectorAll('.custContent_2');

contTopMenuLi.forEach(element => {
    element.addEventListener('click',function(e){
        contTopMenuLi[0].classList.remove('on')
        contTopMenuLi[1].classList.remove('on')
        element.classList.add('on')

        if(contTopMenuLi[0].classList.contains('on')) {
            console.log('11111111111')
        }else if(contTopMenuLi[1].classList.contains('on')) {
            console.log('2222222222')

    }
    })
});