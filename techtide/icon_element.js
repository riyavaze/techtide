document.addEventListener('DOMContentLoaded', function() {
    const faceButton = document.querySelector('.face-button');
    const faceContainer = document.querySelector('.face-container');
    const containerCoords = document.querySelector('#container');
  
    faceButton.addEventListener('mousemove', function(e) {
      const rect = containerCoords.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
  
      gsap.to(faceButton, {
        duration: 0.3,
        x: (mouseX - rect.width / 2) / rect.width * 50,
        y: (mouseY - rect.height / 2) / rect.height * 50,
        ease: "power4.out"
      });
  
      gsap.to(faceContainer, {
        duration: 0.3,
        x: (mouseX - rect.width / 2) / rect.width * 25,
        y: (mouseY - rect.height / 2) / rect.height * 25,
        ease: "power4.out"
      });
    });
  
    faceButton.addEventListener('mouseenter', function() {
      gsap.to(faceButton, {
        duration: 0.3,
        scale: 0.975
      });
    });
  
    faceButton.addEventListener('mouseleave', function() {
      gsap.to([faceButton, faceContainer], {
        duration: 0.3,
        x: 0,
        y: 0,
        scale: 1
      });
    });
  });
  