document.getElementById('btnFetch').addEventListener('click', function() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      const dogImage = document.getElementById('dogImage');
      dogImage.src = data.message; 
    })
    .catch(error => console.error('Error:', error)); 
});
