// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hide = document.getElementById('modal');
hide.className = 'hidden';

const likes = document.querySelectorAll('.like-glyph');
console.log(likes)
for (const like of likes) {
  like.addEventListener('click', fillheart)
}
function fillheart (event) {
  console.log(event.target);
  mimicServerCall('url')
  .then(function() {
    if (event.target.innerText === EMPTY_HEART) {
      event.target.innerText = FULL_HEART
      event.target.className = 'activated-heart'
    } else {
      event.target.innerText = EMPTY_HEART
      event.target.className = ''
    }
  })
  .catch(function(error){
    hide.className = ''
    hide.innerText = error
    setTimeout(() => {
      hide.classList.add('hidden')
    }, 3000);
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
