let btn = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');

// let iText = document.getElementById('itext');
// let iHTML = document.querySelector('#ihtml');


// itext.innerText = "le code hexadecimale pour la croix est &#x2715;"
// ihtmlL.innerHTML = "le code hexadecimale pour la croix est &#x2715;"


btn.addEventListener('click', ()=>{
  navbar.classList.toggle('active');

  if(navbar.classList.contains('active')){
    btn.innerHTML = "&#x2715;";
  }else{
    btn.innerHTML = "&#x2630;";
  }

})


window.addEventListener('mousemove', (e)=>{
console.log('y:',e.clientY);
console.log('x:',e.clientX);
})

// window.addEventListener('scroll', (e)=>{
//   console.log(e);
 
//   })



//carousel js


let bt = document.querySelectorAll('.bt');
let img = document.querySelectorAll('.slider ul li');// Sélectionne tous les boutons et toutes les images dans un carrousel

for (let i = 0; i < bt.length; i++) {
   // Pour chaque bouton dans la liste des boutons

   bt[i].addEventListener('click', (e) =>{
// Associe une action lors du clic sur le bouton

const imgActive = document.querySelector('.active');
// Trouve l'image actuellement active
const curentIndex = [...img].indexOf(imgActive);
// Trouve la position de l'image active dans la liste des images
const calc = bt[i].id == 'next'? 1 : -1;

// Détermine si on doit aller à l'image suivante ou précédente
let index = curentIndex + calc;
// Calcule la nouvelle position en tenant compte de la direction

if(curentIndex >= img.length -1 && bt[i].id == 'next') index = 0;
// Si l'image active est la dernière et qu'on veut aller à la suivante, revient à la première
if(curentIndex == 0 && bt[i].id == 'prev') index = img.length -1;
// Si l'image active est la première et qu'on veut aller à la précédente, va à la dernière

img[index].classList.add('active');// Met à jour la classe 'active' pour afficher la nouvelle image
imgActive.classList.remove('active');

// console.log(imgActive);
// console.log(curentIndex);

   })
}