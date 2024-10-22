


let imgArr1 = [
    './images/bg-main-visual-bg-01.png',
    './images/bg-main-visual-bg-02.png',
    './images/bg-main-visual-bg-03.png',
]
const leftMoveBg = document.querySelector('.leftMoveBg')
let imgArrindex = 0;
let scWidth = window.innerWidth;
let scHeight = window.innerHeight;
let scrReset = 0;
window.addEventListener("resize",updateScreenSize);

function updateScreenSize() {
    scWidth = window.innerWidth;
    scHeight = window.innerHeight;
}



// section1 - 캐릭터 4초에 한번씩 변경되는 스크립트
    setInterval(function(){
        if(imgArrindex < imgArr1.length) {
            leftMoveBg.style.backgroundImage = `url(${imgArr1[imgArrindex]})`;
            leftMoveBg.classList.remove('leftMoveBg_1','leftMoveBg_2','leftMoveBg_3')
            leftMoveBg.classList.add(`leftMoveBg_${imgArrindex + 1}`)
            imgArrindex ++;
        }else{
            imgArrindex = 0;
            leftMoveBg.style.backgroundImage = `url(${imgArr1[imgArrindex]})`;
            leftMoveBg.classList.remove('leftMoveBg_1','leftMoveBg_2','leftMoveBg_3')
            leftMoveBg.classList.add(`leftMoveBg_${imgArrindex + 1}`)
            imgArrindex ++;
        }
    },4000)

    window.addEventListener("wheel", function(event) {
        let ScrollPosition = event.deltaY; //스크롤 방향 확인
        if(ScrollPosition > 0) {
            console.log('내려간다~~');
        }else{
            console.log('올라간다~~')
        }
        let ScrollPosition2 = window.scrollY; 
        console.log(ScrollPosition2)

    });



