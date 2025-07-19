const fetchBtn = document.querySelector("#fetch");
const likeBtn = document.querySelector("#like");
const dislikeBtn = document.querySelector("#dislike");
const joke = document.querySelector("#joke");
const likeCounter = document.querySelector("#total");

let count = 0;

function handleFetch() {
  count = 0;
  likeCounter.textContent = `Total Like/Dislike : ${count}`;
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      joke.textContent = data.value;
    });
}

fetchBtn.addEventListener("click", handleFetch);

likeBtn.addEventListener("click", () => {
  if (joke.textContent === "") {
    likeCounter.textContent =
      "Please fetch the joke before liking or disliking";
  } else {
    count++;
    likeCounter.textContent = `Total Like/Dislike : ${count}`;
  }
});

dislikeBtn.addEventListener("click", () => {
  if (joke.textContent === "") {
    likeCounter.textContent =
      "Please fetch the joke before liking or disliking";
  } else {
    if (count > 0) {
      count--;
      likeCounter.textContent = `Total Like/Dislike : ${count}`;
    }
  }
});
