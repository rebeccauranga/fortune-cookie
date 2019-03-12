const url =
  "http://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune";

function getFortune() {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const { fortune } = json;
      const randomFortuneElement = document.querySelector(".output h1");
      randomFortuneElement.textContent = fortune;
      buttonElement.textContent = originalButtonText;
    });
}

const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", getFortune);
