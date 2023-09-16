let scene = document.querySelector('.js-scene'),
    cssClass = ['bear', 'julien', 'bear', 'fouquet'],
    n = 0,
    interval = 0;
    
interval = setInterval(function(){
  n++;
  scene.className = 'elements ' + cssClass[n % cssClass.length];

  if(n >= 10) {
      clearInterval(interval);
      n = 0;

      scene.addEventListener('click', function() {
        clearInterval(interval);
        n = 1;
        scene.className = 'elements ' + cssClass[n % cssClass.length];

        interval = setInterval(function(){
          n++;
          scene.className = 'elements ' + cssClass[n % cssClass.length];
        
          if(n >= 10) {
              clearInterval(interval);
              n = 0;
          }
        }, 1200)
      }, false);
  }
}, 1200)
