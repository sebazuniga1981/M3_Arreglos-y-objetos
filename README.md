1. Crear las páginas solicitadas para las propiedades en alquiler y venta. Además, cada una se conecta al script con el arreglo de propiedades que corresponda. Considerar, además, que existirá una página index.html que será la principal.(1 punto).

R. Se crean los html indes, propiedades_alquiler y propiedades_venta

2. Generar dos arreglos de propiedades (Uno para venta y otro para alquiler) que cumplan la siguiente estructura que se muestra de ejemplo. Una vez generados los arreglos de objetos para las propiedades en alquiler y en venta, añade al menos 4 objetos en cada arreglo.(2 puntos).

R. se genera el js data.js, donde se alojan los dos arreglos (propiedades_venta y propiedades_alquiler con mas de tres objetos ).

3. Utilizar ciclos para recorrer el arreglo de con los objetos de propiedades y la interpolación y el innerHTML para generar templates y agregar la de las propiedades en su respectiva página HTML. (4 Puntos).

R. Se crean en  en los JS , index.js, alquiler.js y venta.js

4. Utilizar condicionales para realizar la lógica asociada en caso de que se permitan mascotas y fumar en la propiedad. (2 Puntos).

R. <p><strong>Fumar:</strong>${propiedad.smoke?"Permitido ✅" : "Prohibido 🚫"}</p>
<p><strong>Mascotas:</strong>${propiedad.pets?"Permitidas 🐶" : "No permitidas ❌"}</p>
y en data  se entregan los booleanos
"smoke: false,pets:true,"

5.En la página index.html, mostrar solo 3 propiedades en venta y 3 propiedades en alquiler. Tal como se muestra en la imagen 1, enlaza el botón a su respectiva página web para ver más propiedades. (1 punto).

R. se muestran tres propiedades en index desde los contenedores (3) y  desde las paginas se muestran las tarjetas totales.

se agrega un CSS y media queries para que sea reponsiva.