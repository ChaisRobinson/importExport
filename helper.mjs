// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/

export async function getPhotos() {
  const container = document.querySelector(".photoContainer");

  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await response.json();

  for (let i = 0; i < 50; i++) {
    const image = document.createElement("img");
    image.src = photos[i].thumbnailUrl;
    container.appendChild(image);
  }
}

// -  export async function getPhotos() {
// -    let photoContainer = document.querySelector('.photoContainer');
// -    fetch("https://jsonplaceholder.typicode.com/photos")
// -      .then((response) => response.json())
// -      .then((json) => {
// -        json.forEach.forEach(element => {
// -        let  img = document.querySelector('photoContainer')
// -        for (let i = 0; i < 50; i++) {
// -        let image = document.createElement('img')
// -        image.setAttribute('src', json[i].thumbnailUrl)
// -        photoContainer.append(image)
// -        });
// -
// -      });
// -  }
