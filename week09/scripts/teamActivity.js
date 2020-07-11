/*
document.querySelectorAll(".key").forEach(key => {
    key.addEventListener('keypress', playSound)
});*/

document.addEventListener('keydown', playSound);

function playSound(event){
    try {
        let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    
        audio.currentTime = 0;
        audio.play();
        console.dir(audio);

        let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
        key.classList.add("playing");
        audio.addEventListener("ended", removePlayingClass);

    } catch (error) {
        console.log("Key does not play sound");
    }
    
}

function removePlayingClass(event){
    let keyCode = event.target.dataset.key;
    let key = document.querySelector(`div[data-key="${keyCode}"]`)
    key.classList.remove("playing");
}