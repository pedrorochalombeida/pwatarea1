function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("open");
}
function mostrarMensaje() {
    alert("Formulario Enviado");
    // Puedes agregar aquí código adicional para enviar el formulario si es necesario
    return false; // Esto evita que el formulario se envíe realmente (para el propósito de este ejemplo)
}
function cambiarEstilos() {
    var contenido = document.querySelector('.contenido');
    contenido.classList.toggle('cambiado');
}

var modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = '<div class="modal-content"></div>';
document.body.appendChild(modal);

var images = document.querySelectorAll('.galeria img');
var modalContent = document.querySelector('.modal-content');

images.forEach(function(image) {
    image.onclick = function() {
        modalContent.innerHTML = '';
        var imgClone = image.cloneNode(true);
        modalContent.appendChild(imgClone);
        modal.style.display = 'block';
    };
});

modal.onclick = function() {
    modal.style.display = 'none';
};
