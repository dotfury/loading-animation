window.addEventListener('DOMContentLoaded', function() {
  const gui = new lil.GUI();
  const config = {
    textShadow: false
  };

  gui.add(config, 'textShadow').onChange(isActive => {
    if (isActive) {
      document.body.classList.add('with-shadow');
    } else {
      document.body.classList.remove('with-shadow');
    }
  });
});