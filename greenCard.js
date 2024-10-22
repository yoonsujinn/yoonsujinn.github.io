


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


    setTimeout(() => {
        window.addEventListener("wheel", function(event) {
            let ScrollXY = event.deltaY; //스크롤 방향 확인
            let ScrollPosition = window.scrollY; // 스크롤 위치 확인
    
            if(ScrollXY > 0) {
                window.scroll({
                    top: ScrollPosition+scHeight, // 이동할 y좌표
                    behavior: 'smooth' // 부드럽게 스크롤
                });
            }else{
                window.scroll({
                    top: ScrollPosition-scHeight, // 이동할 y좌표
                    behavior: 'smooth' // 부드럽게 스크롤
                });
            }
            console.log(ScrollPosition)
    
        });
    
        
    }, 1000);



