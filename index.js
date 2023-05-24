import datos from "./personas.json" assert {type:"json"}

window.addEventListener("load",()=>{
    const container=document.getElementById('cards-container');
    const cardTemplate=document.getElementById('card-template');
datos.forEach(dato =>{
    const card=cardTemplate.content.cloneNode(true);
    card.querySelector('.card-title').textContent=dato.nombre;
    card.querySelector('.card-apellido').textContent=dato.apellido;
    card.querySelector('.card-edad').textContent=dato.edad;
    card.querySelector('.card-mail').textContent=dato.email;

    //agregar la card al contenedor
    container.appendChild(card);
});
})
