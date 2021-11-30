let voiture = {
    Nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    Couleur : "Marron",
    Constructeur : "Citroen",
    Carburant : "Solaire",
    nombrePortes : 3,
    Autonomie : "450km",
    vitesseMaxi : "120km/h"
};
let img = document.createElement("img");
img.src = voiture.imgUrl;
document.body.appendChild(img)
let text = document.createElement('div');
document.body.appendChild(text);
text.innerHTML = "cette voiture a " +voiture.nombresRoues + " roues <br> " +
    "elle est de couleur " +voiture.Couleur+ "<br>" +
    " construit par " + voiture.Constructeur+ "<br>" +
    " elle fonctionne grace a" +voiture.Carburant+ "<br>" +
    "Elle possède " +voiture.nombrePortes+ " portes" + "<br>" +
    "autonomie de " +voiture.Autonomie+ "<br>" +
    "vitesse max " +voiture.vitesseMaxi+ "";


