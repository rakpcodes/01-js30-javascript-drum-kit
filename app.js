
window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; //stops the function from running when a keycode is pressed that isnt associated with an audio tag.
    audio.currentTime = 0; // returns the audio to the start on button press
    audio.play();
    key.classList.add('playing');
})

function removeTransition (e) {
    if (e.propertyName !== 'transform') return // skips removing transition if it's not a transform
    this.classList.remove('playing') //this refers to 'key' as it is the owner of the removeTransition function when it is called in the forEach

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));