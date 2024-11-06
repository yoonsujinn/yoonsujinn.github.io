
let imgArr1 = [
    './images/bg-main-visual-bg-01.png',
    './images/bg-main-visual-bg-02.png',
    './images/bg-main-visual-bg-03.png',
]
const leftMoveBg = document.querySelector('.leftMoveBg')
const rightTitle =  document.querySelectorAll('.rightTitle')
let scWidth = Math.round(window.innerWidth);
let scHeight = Math.round(window.innerHeight);
const motions = {
    1: {
        start: page1_motion,
        end: page1_motion_exit,
    },
    2: {
        start: page2_motion,
        end: page2_motion_exit,
    },
    3: {
        start: page3_motion,
        end: page3_motion_exit,
    },
    4: {
        start: page4_motion,
        end: page4_motion_exit,
    },
    5: {
        start: page5_motion,
        end: page5_motion_exit,
    },
};


// 화면 처음 시작할때 실행되는 js
scWidth = Math.floor(scWidth / 10) * 10;
scHeight = Math.floor(scHeight / 10) * 10;
window.addEventListener("resize",updateScreenSize)

function updateScreenSize() {
    scWidth = window.innerWidth;
    scWidth = Math.floor(scWidth / 10) * 10;
    scHeight = window.innerHeight;
    scHeight = Math.floor(scHeight / 10) * 10;
}

page1_motion()




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
    
// 화면 전체 스크롤
window.addEventListener("wheel", function(event) {
event.preventDefault();
let scrollXY = event.deltaY; //스크롤 방향 확인
let scrollPosition = window.scrollY; // 스크롤 현재 위치 확인
// console.log(scrollPosition,'현재높이');
// console.log(scHeight,'화면');
    if(scrollXY > 0 ) { //내려갈때
        if(scrollPosition < scHeight) {
            setTimeout(() => {
                window.scroll({
                    top: scHeight, 
                    behavior: 'smooth' 
                });
            },30);
        }else if(scrollPosition == scHeight) {
            setTimeout(() => {
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

//페이지마다 기능 열렸다 닫혔다 하기
window.addEventListener("scroll",function(event) {
    let scrollPosition = window.scrollY; // 스크롤 현재 위치 확인
    let sectionIndex = document.querySelectorAll('section');
        for(let i=1; i<sectionIndex.length; i++) {
                if(scrollPosition < scHeight) {
                    motions[i].end();
                    motions[1].start();
                }
                if(scrollPosition == scHeight) {
                    motions[i].end();
                    motions[2].start();
                }
                if(scrollPosition == scHeight*2) {
                    motions[i].end();
                    motions[3].start();
                }
                if(scrollPosition == scHeight*3) {
                    motions[i].end();
                    motions[4].start();
                }
                if(scrollPosition == scHeight*4) {
                    motions[i].end();
                    motions[5].start();
                }
            }
        });
// 페이지마다 로딩될때 실행하는 JS
    function page1_motion() {
        console.log('1페이지 도착!~~!')
        document.querySelectorAll('.rightTitle').forEach((element,index) => {
            setTimeout(() => {
                element.classList.add('on');   
            }, (index + 1) * 60);
        });
        setTimeout(() => {
            document.querySelector('.section_1 em').classList.add('on');   
        },600);
        setTimeout(() => {
            document.querySelector('.section_1 .rightApp').classList.add('on');   
        },1200);
    }
    function page1_motion_exit() {
        document.querySelectorAll('.rightTitle').forEach((element,index) => {
                element.classList.remove('on');   
        });
        document.querySelector('.section_1 em').classList.remove('on');   
        document.querySelector('.section_1 .rightApp').classList.remove('on');   
    }

    function page2_motion() {
        console.log('2페이지 도착!~~!')
    }
    function page2_motion_exit() {
        console.log('2페이지 나가기')
    }
    
    function page3_motion() {
        console.log('3페이지 도착!~~!')
    }
    function page3_motion_exit() {
        console.log('3페이지 나가기')
    }
    function page4_motion() {
        console.log('4페이지 도착!~~!')
    }
    function page4_motion_exit() {
        console.log('4페이지 나가기')
    }
    function page5_motion() {
        console.log('5페이지 도착!~~!')
    }
    function page5_motion_exit() {
        console.log('5페이지 나가기')
    }





