document.addEventListener('DOMContentLoaded', () => {
  const greetingElement = document.getElementById('greeting');

  fetch('/api/hello')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      greetingElement.textContent = data.message;
      greetingElement.classList.remove('loading');
    })
    .catch(error => {
      console.error('Error fetching greeting:', error);
      greetingElement.textContent = 'Failed to load greeting from backend.';
      greetingElement.style.color = '#ff6b6b';
    });
});