export default function decorate(block) {
  block.classList.add('imagecard-wrapper');
 
  [...block.children].forEach((card) => {
    card.classList.add('imagecard-card');
 
    const [imageWrapper, textWrapper] = card.children;
 
    if (textWrapper && imageWrapper) {
      const text = textWrapper.querySelector('p');
      if (text) {
        textWrapper.remove(); // Remove the text wrapper from its original place
        imageWrapper.appendChild(text); // Append the text directly to the image wrapper
      }
    }
  });
}
 
 