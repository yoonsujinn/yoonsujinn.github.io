


let imgArr1 = [
    './images/bg-main-visual-bg-01.png',
    './images/bg-main-visual-bg-02.png',
    './images/bg-main-visual-bg-03.png',
]
const leftMoveBg = document.querySelector('.leftMoveBg')
const rightTitle =  document.querySelectorAll('.rightTitle')
let scWidth = window.innerWidth;
let scHeight = window.innerHeight;
window.addEventListener("resize",updateScreenSize)


function updateScreenSize() {
    scWidth = window.innerWidth;
    scHeight = window.innerHeight;
}
// section1 - 캐릭터 4초에 한번씩 변경되는 스크립트
    setInterval(function(){
        let imgArrinde
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
            let scrollXY = event.deltaY; //스크롤 방향 확인
            let scrollPosition = window.scrollY; // 스크롤 현재 위치 확인
            console.log(scrollXY);
                setTimeout(() => {
                if(scrollXY > 0 ) { //내려갈때
                    if(scrollPosition <= scHeight) {
                        window.scroll({
                        top: scHeight*1, 
                        behavior: 'smooth' 
                        });
                    }
                    else if(scrollPosition <= scHeight*2) {
                        window.scroll({
                            top: scHeight*2, 
                            behavior: 'smooth' 
                        });
                    }else if(scrollPosition <= scHeight*3) {
                        window.scroll({
                            top: scHeight*3, 
                            behavior: 'smooth' 
                        });
                    }
                }else if( scrollXY < 50) { //올라갈때

                }
                });  
            }, 500);
    



