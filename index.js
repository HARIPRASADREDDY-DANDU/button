function throwPapers() {
    const paperCount = 2000; // Number of papers to be thrown
    const duration = 6000; // Duration for papers to disappear in milliseconds
  
    for (let i = 0; i < paperCount; i++) {
      const paper = document.createElement('div');
      paper.classList.add('paper');
      document.body.appendChild(paper);
  
      const leftPosition = Math.random() * window.innerWidth;
      const topPosition = Math.random() * window.innerHeight;
      const rotation = Math.random() * 360;
  
      paper.style.left = `${leftPosition}px`;
      paper.style.top = `${topPosition}px`;
      paper.style.transform = `rotate(${rotation}deg)`;
  
      setTimeout(() => {
        paper.remove();
      }, duration);
    }
  }
  