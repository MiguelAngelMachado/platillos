'use strict'

const botonRegistrar = document.getElementById('btn-registrar');
const nombrePlato = document.getElementById('nombrePlatillo');
const tipoCarne = document.getElementById('carne');
const verdura = document.getElementById('verdura');
const vegetal = document.getElementById('vegetal');
const especias = document.getElementById('especias');
const salsa = document.getElementById('salsa');
const precio = document.getElementById('precio');

const validar = () => {
    let hayError = false;

    if (nombrePlato.value == '') {
        hayError = true;
        nombrePlato.classList.add('input-error');
    } else {
        nombrePlato.classList.remove('input-error');
    }

    if (tipoCarne.value == '') {
        hayError = true;
        tipoCarne.classList.add('input-error');
    } else {
        tipoCarne.classList.remove('input-error');
    }

    if (verdura.value == '') {
        hayError = true;
        verdura.classList.add('input-error');
    } else {
        verdura.classList.remove('input-error');
    }

    if (vegetal.value == '') {
        hayError = true;
        vegetal.classList.add('input-error');
    } else {
        vegetal.classList.remove('input-error');
    }

    if (especias.value == '') {
        hayError = true;
        especias.classList.add('input-error');
    } else {
        especias.classList.remove('input-error');
    }

    if (salsa.value == '') {
        hayError = true;
        salsa.classList.add('input-errror');
    } else {
        salsa.classList.remove('input-error');
    }

    if (precio.value == '') {
        hayError = true;
        precio.classList.add('input-error');
    } else {
        precio.classList.remove('input-error');
    }

    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se puede registrar el platillo',
            'text': 'Por favor revise los campos resaltados'
        });  
    } else {
        registrarPlatillo();
    }
}

const registrarPlatillo = () => {
    let data = {
        "nombrePlatillo":nombrePlato.value,
        "tipoCarne":tipoCarne.value,
        "verdura":verdura.value,
        "vegetal":vegetal.value,
        "especias":especias.value,
        "salsa":salsa.value,
        "precio":precio.value
    };
    registrarDatos('registrar-platillo', data, 'listarPlatos.html');
};

botonRegistrar.addEventListener('click', () => {
    validar();
});
