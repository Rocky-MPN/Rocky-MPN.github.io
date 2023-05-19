window.addEventListener('keydown', playSound);
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if not in transform
    this.classList.remove('playing')

}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from playing if not associated key hit
    audio.currentTime = 0; //rewind to the start
    audio.play()
    key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))