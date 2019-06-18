// Global variables
const blocks = document.querySelectorAll('.block');
let mouseDown = false;
let mouseIn = false;
let currentBlock = null;

// Check window for mouse down/up status so it can update without dependency on blocks
window.addEventListener('mousedown', () => {
  mouseDown = true;
});
window.addEventListener('mouseup', () => {
  currentBlock = null;
  mouseDown = false;
});

// Check blocks for updated status
blocks.forEach(block => {
  block.addEventListener('click', event => {
    event.target.parentNode.prepend(event.target);
  });
  block.addEventListener('mouseenter', () => {
    currentBlock = block;
    mouseIn = true;
  });
  block.addEventListener('mouseleave', () => {
    currentBlock = null;
    mouseIn = false;
  });
});

// Update status for block every 10ms if applicable
setInterval(() => {
  if (currentBlock && mouseDown && mouseIn) {
    const currentPos = parseInt(currentBlock.style.marginLeft || 10, 10);
    // Maximum of 400px distance
    if (currentPos < 400) {
      currentBlock.style.marginLeft = currentPos + 1 + 'px';
    }
  }
  blocks.forEach(block => {
    if (block != currentBlock || !mouseDown || !mouseIn) {
      const currentPos = parseInt(block.style.marginLeft || 10, 10);

      if (currentPos > 10) {
        block.style.marginLeft = currentPos - 1 + 'px';
      }
    }
  });
}, 10);
