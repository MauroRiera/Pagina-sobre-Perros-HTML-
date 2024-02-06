function ingreso() {
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;
    let valor = false;

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(datos => {
            for (let usuario of datos) {
                if (user == usuario.username && pass == usuario.id) {
                    valor = true;
                }
            }

            if (valor == true) {
                window.location.href = 'Inicio.html';
            }
            else {
                alert("Usuario o Contraseña incorrectos");
            }
        }
        );
}

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})