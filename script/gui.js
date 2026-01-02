window.addEventListener('DOMContentLoaded', function() {
  const gui = new lil.GUI();
  const config = {
    textFill: false,
    lift: 30,
    rotation: 70,
  };

  gui.add(config, 'textFill').name('Text Fill').onChange(isActive => {
    if (isActive) {
      document.body.classList.add('with-shadow');
    } else {
      document.body.classList.remove('with-shadow');
    }
  });

  gui.add(config, 'lift', 15, 60, 1).name('Lift Height').onChange(value => {
    document.documentElement.style.setProperty('--lift-height', `${value}px`);
  });

  gui.add(config, 'rotation', 0, 70, 1).name('Text Rotation').onChange(value => {
    document.documentElement.style.setProperty('--text-rotation', `${value}deg`);
  });
});