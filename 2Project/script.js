// This code will run when the HTML is loaded
console.log("JavaScript file is linked successfully!");

const root = document.querySelector("#root");
const btn = document.querySelector("#btn");

function createItem(item){
    // card
    const card=  document.createElement("div")
    card.classList.add("card")

  //photo create 
  const photos = document.createElement('img')
  photos.scr=item.url;
  //Create Image
  const title1= document.createElement("h4")
  title1.innerHTML= item.title;
  card.appendChild(photos)
  card.appendChild(title1)
  root.appendChild(card)
//   console.log("card",card)

}

function getPhotos(item) {
    item.forEach(function (item){
    createItem(item);
    });
  console.log(item);
}

btn.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((res) => res.json())
    .then((item) => {
      getPhotos(item);
    });
});
