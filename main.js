document.body.className = "entrada";
let transportes = document.getElementById("operadores");
let formulario = document.getElementById("formulario");
let operadorInput = document.getElementById("operadorInput");
let registro = document.getElementById("registroForm");
let navegacion = document.getElementById("homeNav");
formulario.addEventListener("submit", (e) => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "INGRESO EXITOSO",
        showConfirmButton: false, 
        timer: 1500
    });
    e.preventDefault();
    let operador = operadorInput.value;
    operador = operador === "pedro perez" || operador === "liliana marquez" ? "Autorizado" : "No Autorizado";
    transportes.innerHTML =
        operador === "Autorizado"
            ? "<h1>Operador Autorizado Bienvenido a World Distribution Sr Pedro Perez</h1>"
            : "<h1>Operador no Autorizado ALERTA</h1>";
    transportes.classList = operador === "Autorizado" ? "positivo" : "alarma";
    if (operador !== "Autorizado") {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "USUARIO INVALIDO",
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(() => {
            navegacion.classList = ("block");
        }, 1000)
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    } else {
        setTimeout(() => {
            navegacion.style.display = "none";
        }, 6000);
    }
});
const btn = document.getElementById('button');
document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        btn.value = 'Enviando...';
        const serviceID = 'default_service';
        const templateID = 'template_kgleis9';
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'ENVIANDO E-MAIL';
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "EN LA BREVEDAD NOS CONTACTAREMOS",
                    showConfirmButton: false,
                    timer: 2500,
                });
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }, (err) => {
                btn.value = 'Send Email';
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "NO ENVIADO",
                    showConfirmButton: false,
                    timer: 2500,
                });
            });
    });





