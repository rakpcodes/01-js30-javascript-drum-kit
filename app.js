

window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; //stops the function from running when a keycode is pressed that isnt associated with an audio tag.
    audio.currentTime = 0; // returns the audio to the start on button press
    audio.play()
})