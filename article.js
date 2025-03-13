
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


fetch("https://iut.nathanael-spriet.fr/data.json")
.then((reponse) => reponse.json())
.then((json) => {json.forEach((ele)=> {
    const messageTemplateElement = document.querySelector('#template');
    let newElement = messageTemplateElement.cloneNode(true).content;
    newElement.querySelector('#image').src = "medias/images/" + ele.picture;
    newElement.querySelector('#name').textContent = ele.name;
    newElement.querySelector('#description').textContent = ele.description;
    newElement.querySelector('#price').textContent = ele.price;
    newElement.querySelector('#bouton').textContent = ele.bouton;
    corps3.appendChild(newElement);
})});
