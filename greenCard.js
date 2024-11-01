
let imgArr1 = [
    './images/bg-main-visual-bg-01.png',
    './images/bg-main-visual-bg-02.png',
    './images/bg-main-visual-bg-03.png',
]
const leftMoveBg = document.querySelector('.leftMoveBg')
const rightTitle =  document.querySelectorAll('.rightTitle')
let scWidth = Math.round(window.innerWidth);
 scWidth = Math.floor(scWidth / 10) * 10;
let scHeight = Math.round(window.innerHeight);
scHeight = Math.floor(scHeight / 10) * 10;
window.addEventListener("resize",updateScreenSize)


function updateScreenSize() {
    scWidth = window.innerWidth;
    scWidth = Math.floor(scWidth / 10) * 10;
    scHeight = window.innerHeight;
    scHeight = Math.floor(scHeight / 10) * 10;
}
// section1 - 캐릭터 4초에 한번씩 변경되는 스크립트
let imgArrindex;
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
            event.preventDefault();
            let scrollXY = event.deltaY; //스크롤 방향 확인
            let scrollPosition = window.scrollY; // 스크롤 현재 위치 확인
            // console.log(scrollPosition,'현재높이');
            // console.log(scHeight,'화면');
                if(scrollXY > 0 ) { //내려갈때
                    if(scrollPosition < scHeight) {
                        console.log('내려감11111111')
                        setTimeout(() => {
                            window.scroll({
                                top: scHeight, 
                                behavior: 'smooth' 
                            });
                        },30);
                    }else if(scrollPosition == scHeight) {
                        setTimeout(() => {
                        console.log('내려감222222222222')
                            window.scroll({
                                top: scHeight*2, 
                                behavior: 'smooth' 
                            });
                        },30);
                    }else if(scrollPosition == scHeight*2) {
                        setTimeout(() => {
                            window.scroll({
                                top: scHeight*3, 
                                behavior: 'smooth' 
                            });
                        },30);
                    }else if(scrollPosition == scHeight*3) {
                        setTimeout(() => {
                            window.scroll({
                                top: scHeight*4, 
                                behavior: 'smooth' 
                            });
                        },30);
                    }
                }else if( scrollXY < 50) { //올라갈때
                    // console.log(scHeight,'화면높이');
                    // console.log(scrollPosition,'현재높이');
                    // console.log('-------------------------------')
                        if(scrollPosition == scHeight) {
                            setTimeout(() => {
                                window.scroll({
                                    top: 0, 
                                    behavior: 'smooth' 
                                });
                            },30);
                        }
                        else if(scrollPosition == scHeight*2) {
                            setTimeout(() => {
                                window.scroll({
                                    top: scHeight, 
                                    behavior: 'smooth' 
                                });
                            },30);
                        }
                        else if(scrollPosition == scHeight*3) {
                            console.log('33333')
                            setTimeout(() => {
                                window.scroll({
                                    top: scHeight*2, 
                                    behavior: 'smooth' 
                                });
                            },30);
                        }
                        else if(scrollPosition >= scHeight*4) {
                            setTimeout(() => {
                                window.scroll({
                                    top: scHeight*3, 
                                    behavior: 'smooth' 
                                });
                            },30);
                        }
                        else if(scrollPosition >= scHeight*5) {
                            setTimeout(() => {
                                window.scroll({
                                    top: scHeight*5, 
                                    behavior: 'smooth' 
                                });
                            },30);
                        }
                }
            }, { passive: false });

            function page1_motion() {
                console.log('1페이지 도착!~~!')
            }
    
            function page2_motion() {
                console.log('2페이지 도착!~~!')
            }

            function page3_motion() {
                console.log('1페이지 도착!~~!')
            }
            function page4_motion() {
                console.log('1페이지 도착!~~!')
            }





