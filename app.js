
const playsound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; //stops the function from running when a keycode is pressed that isnt associated with an audio tag.
    audio.currentTime = 0; // returns the audio to the start on button press
    audio.play();
    key.classList.add('playing');

}


function removeTransition () {
    this.classList.remove('playing') //this refers to 'key' as it is the owner of the removeTransition function when it is called in the forEach
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playsound)