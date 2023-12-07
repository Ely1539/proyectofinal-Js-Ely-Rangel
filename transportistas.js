document.body.className = "entrada"
document.addEventListener("DOMContentLoaded", () => {
    class Chofer {
        constructor(info) {
            this.nombre = info.nombre;
            this.edad = info.edad;
            this.direccion = info.direccion;
        }
    }

    let choferes = [
        { nombre: "luis pedrozo", edad: 33, direccion: "corrientes 2156, Caba" },
        { nombre: "pedro alvarez", edad: 45, direccion: "olleros 266, Caba" },
        { nombre: "silvio melendez", edad: 55, direccion: "santa fe 1116, Caba" },
        { nombre: "jorge ruiz", edad: 32, direccion: "florida 1022, Caba" },
    ];

    const choferContainer = document.getElementById("choferContainer");

    document.getElementById("consultarChoferesButton").addEventListener("click", () => {
        choferContainer.innerHTML = "";
        choferes.forEach(chofer => {
            const div = document.createElement("div");
            div.classList.add("chofer");
            div.innerHTML =
                `<h3>Nombre:${chofer.nombre}</h3>
                <p>Edad: ${chofer.edad}</p>
                <p> Dirección:${chofer.direccion}</p>`;
            choferContainer.appendChild(div);
        });
    });

    const transportes=[
        { id: 1, nombre: "transporte2011", localidad: "corrientes" },
        { id: 2, nombre: "transporteLopez", localidad: "chubut" },
        { id: 3, nombre: "transNew", localidad: "caba" },
        { id: 4, nombre: "Transglobal", localidad: "lujan" }
    ];

    let transportesData = JSON.parse(localStorage.getItem("transportes")) || [];
    const transportesContainers = document.getElementsByClassName("transportes-container");
    const transportesContainer = transportesContainers[0];
    transportesData.forEach((transp) => {
        const div = document.createElement("div");
        div.classList.add("transporte");
        div.innerHTML = `
            <h3>Transporte : ${transp.id}</h3>
            <p>Nombre: ${transp.nombre}</p>
            <b>Localidad: ${transp.localidad}</b>`;
        transportesContainer.appendChild(div);
    });

    class Transporte {
        constructor(id, nombre, localidad) {
            this.id = id;
            this.nombre = nombre;
            this.localidad = localidad;
        }
    }
    const transportesForm = document.getElementById("transportesForm");
    transportesForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const nombreInput = document.getElementById("nombre");
        const localidadInput = document.getElementById("localidad");
        const nombre = nombreInput.value;
        const localidad = localidadInput.value;

        if (nombre && localidad) {
            const nuevoTransporte = new Transporte(transportesData.length + 1, nombre, localidad);
            transportesData.push(nuevoTransporte);

            const div = document.createElement("div");
            div.classList.add("transporte");
            div.innerHTML = `
                <h3>Transporte: ${nuevoTransporte.id}</h3>
                <p>Nombre: ${nuevoTransporte.nombre}</p>
                <b>Localidad: ${nuevoTransporte.localidad}</b>`;
            transportesContainer.appendChild(div);
        localStorage.setItem("transportes", JSON.stringify(transportesData));
            nombreInput.value = "";
            localidadInput.value = "";

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Transporte Creado Con Exito",
                showConfirmButton: false,
                timer: 2500,
            });
        }
    });
});

