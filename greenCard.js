

    let imgArr = [
        'https://www.green-card.co.kr/pc/assets/images/bg/bg-main-visual-bg-01.png',
        'https://www.green-card.co.kr/pc/assets/images/bg/bg-main-visual-bg-02.png',
        'https://www.green-card.co.kr/pc/assets/images/bg/bg-main-visual-bg-03.png',
    ]
    let imgArrindex = 0;
    const leftMoveBg = document.querySelector('.leftMoveBg')
    setInterval(function(){
        if(imgArrindex <= imgArr.length) {
            console.log (imgArrindex-1)
            imgArrindex ++;
        }else if(imgArrindex >= imgArr.length) {
        console.log (imgArrindex-1)
        imgArrindex = 0;

        }
    },1000)


        

        // leftMoveBg.style.backgroundImage = "url('https://www.green-card.co.kr/pc/assets/images/bg/bg-main-visual-bg-01.png')";

