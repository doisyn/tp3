
data.forEach((element)=> {
    console.log(element);
    const messageTemplateElement = document.querySelector('#template');
    let newElement = messageTemplateElement.cloneNode(true).content;
    newElement.querySelector('#image').src = "medias/images/" + element.picture;
    newElement.querySelector('#name').textContent = element.name;
    newElement.querySelector('#description').textContent = element.description;
    newElement.querySelector('#price').textContent = element.price;
    newElement.querySelector('#bouton').textContent = element.bouton;
    corps3.appendChild(newElement);
});


const myImage = document.querySelector('img');
fetch("https://via.placeholder.com/150")
.then(function(response) {
return response.blob();
})
.then(function(myBlob) {
const objectURL = URL.createObjectURL(myBlob);
myImage.src = objectURL;
});