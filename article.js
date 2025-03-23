document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const boutonNav = document.querySelector(".butonav");

        data.forEach((element) => {
            const newElement = document.querySelector("#template").content.cloneNode(true);
            newElement.querySelector("#image").src = "medias/images/" + element.picture;
            newElement.querySelector("#name").textContent = element.name;
            newElement.querySelector("#description").textContent = element.description;
            newElement.querySelector("#price").textContent = element.price + "€";
            newElement.querySelector("#bouton").textContent = "Ajouter Produit";
            boutonNav.before(newElement);
        });
    }, 2000); 
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        fetch("https://iut.nathanael-spriet.fr/data.json")
            .then(response => response.json())
            .then(json => {
                const boutonNav = document.querySelector(".butonav");
                
                json.forEach(ele => {
                    const newElement = document.querySelector("#template").content.cloneNode(true);
                    newElement.querySelector("#image").src = "medias/images/" + ele.picture;
                    newElement.querySelector("#name").textContent = ele.name;
                    newElement.querySelector("#description").textContent = ele.description;
                    newElement.querySelector("#price").textContent = ele.price + "€";
                    newElement.querySelector("#bouton").textContent = "Ajouter Produit";
                    boutonNav.before(newElement); 
                });
            });
    }, 2000);
});
