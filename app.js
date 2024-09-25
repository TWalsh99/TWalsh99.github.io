doccument.addevetlistener("DOMContentLoader", () => {

const images = doccument.querySelectorAll("img");

for(const image of images ){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        image.src = data.message
    image.width = 100;
    image.heigt = 100;
})

}

} )