function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

  const clicks = document.querySelectorAll('.key')
  clicks.forEach(key => {
    key.addEventListener('click', () => playNote(key))
  });

  function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.key)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('playing')
    noteAudio.addEventListener('ended', () => {
      key.classList.remove('playing')
    })
  };