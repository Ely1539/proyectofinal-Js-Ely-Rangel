document.body.className = "entrada"
const clientes = [];
let client = JSON.parse(localStorage.getItem("transportes")) || [];
const clientesContainers = document.getElementsByClassName("clientes-container");
const clientesContainer = clientesContainers[0];
clientes.forEach((cliente) => {
    const div = document.createElement("div");
    div.classList.add("cliente");
    div.innerHTML = `
        <h3>cliente : ${cliente.id}</h3>
        <p>Nombre: ${cliente.nombre}</p>
        <b>Localidad: ${cliente.localidad}</b>`;
    clientesContainer.appendChild(div);
});
class Clientes {
    constructor(id, nombre, localidad) {
        this.id = id;
        this.nombre = nombre;
        this.localidad = localidad;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const clienteForm = document.getElementById("clienteForm");
    const clientesContainer = document.getElementsByClassName("clientes-container")[0];
    const clientes = [];
    clienteForm.addEventListener("submit", (event) => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Cliente Creado Con Exito",
            showConfirmButton: false,
            timer: 1500
        });
        event.preventDefault();
        const nombreInput = document.getElementById("nombre");
        const localidadInput = document.getElementById("localidad");
        const nombre = nombreInput.value;
        const localidad = localidadInput.value;
        const nuevoCliente = nombre && localidad ? {
            id: clientes.length + 1,
            nombre: nombre,
            localidad: localidad,
        } : null;
        if (nuevoCliente) {
            clientes.push(nuevoCliente);
            const div = document.createElement("div");
            div.classList.add("cliente");
            div.innerHTML = `
                <h3>Cliente: ${nuevoCliente.id}</h3>
                <p>Nombre: ${nuevoCliente.nombre}</p>
                <b>Localidad: ${nuevoCliente.localidad}</b>
            `;
            clientesContainer.appendChild(div);
            localStorage.setItem("clientes", JSON.stringify(clientes));
            nombreInput.value = "";
            localidadInput.value = "";
        }
    });
});

document.getElementById("mostrarTodosButton").addEventListener("click", () =>
    fetch("./data.json")
        .then(response => response.json())
        .then(responseData => {
            const data = responseData;
            const baseDeDatosDiv = document.getElementById("baseDeDatos");

            data.forEach(cliente => {
                const divCliente = document.createElement("div");
                divCliente.innerHTML = `
        <h2>Id: ${cliente.id} </h2>
        <p>Nombre: ${cliente.nombre}</p>
        <p>Direccion: ${cliente.localidad}</p>
        <p>Telefono: ${cliente.telefono} <p/>
      `;
                baseDeDatosDiv.appendChild(divCliente);
            });
        })
        .catch(error => console.error('Error fetching data:', error))
);











