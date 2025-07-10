window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("contenedor-venta")) {
    renderizarPropiedades(propiedades_venta, "contenedor-venta",);
  }

});


function renderizarPropiedades (propiedades, contenedorId, limite = propiedades.length){
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML="";

    for (let i=0; i < limite; i++){
const propiedad = propiedades[i];
contenedor.innerHTML+=`
<div class="propiedad">
<img src= "${propiedad.src}" alt="${propiedad.nombre}">
<h2>${propiedad.nombre}</h2>
<p>${propiedad.descripcion}</p>
<p><strong>Ubicacion:</strong> ${propiedad.ubicacion}</p>
<p><strong>Habitaciones:</strong>${propiedad.habitaciones}</p>
<p><strong>Precio:</strong>${propiedad.costo.toLocaleString()}</p>
<p><strong>Fumar:</strong>${propiedad.smoke?"Permitido ✅" : "Prohibido 🚫"}</p>
<p><strong>Mascotas:</strong>${propiedad.pets?"Permitidas 🐶" : "No permitidas ❌"}</p>
</div>
`;
  }
}