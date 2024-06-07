const image = document.querySelector("img");
const msg = document.querySelector("h2");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  // fetch("https://dog.ceo/api/breeds/image/random")
  //   .then((response) => response.json())
  //   .then((json) => {
  //     console.log("Got the data below");
  //     console.log(json.message);
  //     image.src = json.message;
  //     msg.innerText = json.status;
  //   });

  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", (e) => {
    console.log(xhr.response);
    image.src = xhr.response.message;
    msg.innerText = xhr.response.status;
  });
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
});
