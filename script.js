document.addEventListener('DOMContentLoaded', () => {
  const dynamicTitle = document.getElementById('dynamic-title');
  const bentoCards = document.querySelectorAll('.bento-card');
  
  // Default text when no card is hovered
  const DEFAULT_TITLE = 'ACETEKH';

  // Helper function to update text smoothly
  function updateTitle(newText) {
    if (dynamicTitle.textContent === newText) return;

    // Step 1: Fade out slightly
    dynamicTitle.classList.add('swapping');

    // Step 2: Swap text & fade back in
    setTimeout(() => {
      dynamicTitle.textContent = newText;
      dynamicTitle.classList.remove('swapping');
    }, 150);
  }

  // Add hover events to every bento card
  bentoCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const titleAttr = card.getAttribute('data-title');
      if (titleAttr) {
        updateTitle(titleAttr);
      }
    });
  });

  // Reset back to ACETEKH when leaving the entire bento grid area
  const bentoContainer = document.querySelector('.bento-container');
  bentoContainer.addEventListener('mouseleave', () => {
    updateTitle(DEFAULT_TITLE);
  });
});


