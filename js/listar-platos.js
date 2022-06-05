const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
let listaPlatos = [];

document.getElementById('btn-agregar-platillo').addEventListener('click', () => {
   window.location.href = 'registrarPlatos.html'; 
});

const inicializar = async () => {
    listarPlatos = await obtenerDatos('listar-platillos');
    mostrarDatos();
};

const mostrarDatos = () => {
    cuerpoTabla.innerHTML = '';
    let filtro = document.getElementById('txt-filtro').value.toLowerCase();
    listaPlatos.forEach(platillo => {
      if (platillo.nombrePlatillo.toLowerCase().includes(filtro)){
          let fila = cuerpoTabla.insertRow();

          fila.insertCell().innerText = platillo.nombrePlatillo;
          fila.insertCell().innerText = platillo.tipoCarne;
          fila.insertCell().innerText = platillo.verdura;
          fila.insertCell().innerText = platillo.vegetal;
          fila.insertCell().innerText = platillo.especias;
          fila.insertCell().innerText = platillo.salsa;
          fila.insertCell().innerText = platillo.precio;

          let celdaBotones = fila.insertCell();
          let botonEliminar = document.createElement('button');
          botonEliminar.classList.add('btn-eliminar');
          botonEliminar.type = 'button';
          botonEliminar.textContent = 'Eliminar';

          botonEliminar.addEventListener('click', () => {
              eliminarDatos('eliminar-platillo', platillo._id);
          });
          celdaBotones.appendChild(botonEliminar);
      }
    });
}

inicializar();
document.getElementById('txt-filtro').addEventListener('keyup', mostrarDatos);