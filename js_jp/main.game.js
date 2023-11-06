

var getcard = function() {


    var winSound = new Audio('sound/win.mp3')
    var drawSound = new Audio('sound/draw.mp3')
    var loseSound = new Audio('sound/lose.mp3')
    var reverseWinSound = new Audio('sound/reverse_win.mp3')



    var random, random2;

do {
    random = Math.round(Math.random() * 3 + 1);
    myImg.src = 'img/poker0'+ random +'.png';
    random2 = Math.round(Math.random() * 3 + 1);
    comImg.src = 'img/poker0'+ random2 +'.png'
} while (random === random2);


    if(random === 1 && random2 === 1){
        boxC.innerHTML = 'DRAW!';
        drawSound.play()

    }
    if(random === 1 && random2 === 2){
        boxC.innerHTML = 'DRAW!';
        drawSound.play()

    }
    if(random === 1 && random2 === 3){
        boxC.innerHTML = 'YOU LOSE!';
        loseSound.play()

    }
    if(random === 1 && random2 === 4){
        boxC.innerHTML = 'YOU LOSE!';
        loseSound.play()

    }



    if(random === 2 && random2 === 1){
        boxC.innerHTML = 'DRAW!';
        drawSound.play()

    }
    if(random === 2 && random2 === 2){
        boxC.innerHTML = 'DRAW!';
        drawSound.play()

    }
    if(random === 2 && random2 === 3){
        boxC.innerHTML = 'YOU WIN 逆転勝利!';
        reverseWinSound.play()
    }
    if(random === 2 && random2 === 4){
        boxC.innerHTML = 'YOU LOSE!';
        loseSound.play()

    }




    if(random === 3 && random2 === 1){
        boxC.innerHTML = 'YOU WIN!';
        winSound.play()
    }
    if(random === 3 && random2 === 2){
        boxC.innerHTML = 'YOU LOSE!(反轉)';
        reverseWinSound.play()

    }
    if(random === 3 && random2 === 3){
        boxC.innerHTML = 'DRAW!';
        drawSound.play()

    }
    if(random === 3 && random2 === 4){
        boxC.innerHTML = 'DRAW!';
        drawSound.play()

    }




    if(random === 4 && random2 === 1){
        boxC.innerHTML = 'YOU WIN!';
        winSound.play()
    }
    if(random === 4 && random2 === 2){
        boxC.innerHTML = 'YOU WIN!';
        winSound.play()

    }
    if(random === 4 && random2 === 3){
        boxC.innerHTML = 'DRAW!';
        drawSound.play()

    }
    if(random === 4 && random2 === 4){
        boxC.innerHTML = 'DRAW!';
        drawSound.play()

    }


}
get1.onclick = getcard;


