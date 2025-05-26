export default function decorate(block) {
  const imageContainer = block.querySelector('div > div:first-child');
  const textContainer = block.querySelector('div > div:last-child');
 
  // Add classes for styling
  imageContainer.classList.add('imagefull-image');
  textContainer.classList.add('imagefull-text');
 
  // Optional: move textContainer to a new div if needed
  // block.appendChild(textContainer);
}