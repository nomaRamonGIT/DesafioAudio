let audio = document.getElementById("audio1");


function menos () {
    audio.playbackRate -= 0.2;
}

function voltar () {
    audio.currentTime -= 15;
}

function play() {
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }

}

function avancar () {
    audio.currentTime += 15;
}

function mais () {
    audio.playbackRate += 0.2;
}
