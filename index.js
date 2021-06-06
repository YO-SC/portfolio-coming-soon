/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './assets/particles.json', function () {
  console.log('callback - particles.js config loaded');
});

// Get random dog
let dog_easter_button = document.getElementById('dog-easter');

function getRandomDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      // The API call was successful!
      return response.json();
    })
    .then(function (dog_data) {
        dog_easter_button.href = dog_data.message;
    })
    .catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
}

getRandomDog();

dog_easter_button.addEventListener('click', getRandomDog)
